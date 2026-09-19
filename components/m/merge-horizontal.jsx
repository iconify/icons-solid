import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lidfcs8vv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lidfcs8vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:merge-horizontal"} {...others} />);
}

export default Component;
