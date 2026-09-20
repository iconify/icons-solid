import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qypeg9b1z.css';
import '../../css/g/g3v7-054x.css';
import '../../css/y/y_96ajbau.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="qypeg9b1z"/><path class="g3v7-054x"/><path class="y_96ajbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:replit-light"} {...others} />);
}

export default Component;
