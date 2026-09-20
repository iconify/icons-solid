import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un2i-lbfo.css';
import '../../css/f/f59rr5ugd.css';
import '../../css/i/i_u-dktcm.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/e/e_hfs4dyb.css';
import '../../css/t/t1jtnkbje.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="un2i-lbfo"/><path class="f59rr5ugd"/><path class="i_u-dktcm"/><g class="ij2x_72vy"><path class="e_hfs4dyb"/><path class="t1jtnkbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mans-shoe"} {...others} />);
}

export default Component;
