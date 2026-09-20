import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa9ziacce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oa9ziacce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lie-down-line"} {...others} />);
}

export default Component;
