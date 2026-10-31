import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fqq3ldbgf.css';
import '../../css/s/saztvobfo.css';
import '../../css/f/fu2nrg4ev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fqq3ldbgf wm-shadow"/><path class="saztvobfo"/><path class="fu2nrg4ev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cupid-bow"} {...others} />);
}

export default Component;
