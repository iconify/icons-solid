import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_bochsct.css';
import '../../css/h/httnuk_ig.css';
import '../../css/c/c5hsjubcf.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/ijha-rnry.css';
import '../../css/k/k_8mu0b9g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o_bochsct"/><path class="httnuk_ig"/><path class="c5hsjubcf"/><g class="ij2x_72vy"><path class="ijha-rnry"/><path class="k_8mu0b9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:page-with-curl"} {...others} />);
}

export default Component;
