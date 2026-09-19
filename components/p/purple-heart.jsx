import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q3r2y0uuq.css';
import '../../css/n/nfen2qbyk.css';
import '../../css/m/mha4p6bfh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q3r2y0uuq"/><path class="nfen2qbyk"/><ellipse transform="rotate(30 23.477 12.594)" class="mha4p6bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:purple-heart"} {...others} />);
}

export default Component;
