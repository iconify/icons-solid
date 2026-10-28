import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehswywxmb.css';
import '../../css/d/d5yos5bwm.css';
import '../../css/r/ryeirgb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.63 10.87)" class="ehswywxmb"/><rect transform="matrix(0 -1 -1 0 18.63 22.33)" class="ehswywxmb"/><rect transform="matrix(0 -1 -1 0 18.63 10.87)" class="d5yos5bwm"/><rect transform="matrix(0 -1 -1 0 18.63 22.33)" class="d5yos5bwm"/><path class="ryeirgb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tree-view-items"} {...others} />);
}

export default Component;
