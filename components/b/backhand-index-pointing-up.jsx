import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxwh2szbp.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/ga2e5_pov.css';
import '../../css/v/vbn8aybcc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kxwh2szbp"/><g class="ij2x_72vy"><path class="ga2e5_pov"/><path class="vbn8aybcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:backhand-index-pointing-up"} {...others} />);
}

export default Component;
