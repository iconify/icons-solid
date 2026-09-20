import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in3jhzbrb.css';
import '../../css/p/pn5qvq3wy.css';
import '../../css/v/vy6vdn51l.css';
import '../../css/i/i5nxmdbmb.css';
import '../../css/u/umoeozbss.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vlxc-9f8l.css';
import '../../css/p/pu0f4qhtv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="in3jhzbrb"/><path class="pn5qvq3wy"/><path class="vy6vdn51l"/><path class="i5nxmdbmb"/><path class="umoeozbss"/><g class="ij2x_72vy"><path class="vlxc-9f8l"/><path class="pu0f4qhtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pencil"} {...others} />);
}

export default Component;
