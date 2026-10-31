import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/u/uqb2yhb9e.css';
import '../../css/r/r9qafxweb.css';
import '../../css/n/naxhlg8gz.css';
import '../../css/f/fh-m7db9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="uqb2yhb9e"/><path class="r9qafxweb"/><path class="naxhlg8gz"/><path class="fh-m7db9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circuit-board"} {...others} />);
}

export default Component;
