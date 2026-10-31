import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/agl_brovp.css';
import '../../css/r/r-9502pli.css';
import '../../css/u/uj6qtkbzg.css';
import '../../css/f/fm14h790q.css';
import '../../css/h/hhst26bpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="agl_brovp wm-shadow"/><path class="r-9502pli wm-shadow"/><path class="uj6qtkbzg"/><path class="fm14h790q"/><path class="hhst26bpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:certificate"} {...others} />);
}

export default Component;
