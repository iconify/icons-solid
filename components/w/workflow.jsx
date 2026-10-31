import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vs-2r5b3n.css';
import '../../css/f/fqrlsyb2r.css';
import '../../css/t/tncdg9b2d.css';
import '../../css/c/ch3sfwbmn.css';
import '../../css/u/ueu3wqlam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vs-2r5b3n wm-shadow"/><path class="fqrlsyb2r"/><path class="tncdg9b2d"/><path class="ch3sfwbmn"/><path class="ueu3wqlam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:workflow"} {...others} />);
}

export default Component;
