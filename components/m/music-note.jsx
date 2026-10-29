import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwr6_k6lf.css';
import '../../css/h/hl5wasb4y.css';
import '../../css/r/r0qeyebka.css';
import '../../css/a/abq1bdy3s.css';
import '../../css/k/k5559ubmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iwr6_k6lf wm-k"/><path class="hl5wasb4y wm-k"/><path class="r0qeyebka wm-k"/><path class="abq1bdy3s wm-shine"/><path class="k5559ubmh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:music-note"} {...others} />);
}

export default Component;
