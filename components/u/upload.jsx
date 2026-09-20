import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh5q-1lmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qh5q-1lmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:upload"} {...others} />);
}

export default Component;
