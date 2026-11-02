import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay2k2nmzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay2k2nmzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:messages-square-line"} {...others} />);
}

export default Component;
