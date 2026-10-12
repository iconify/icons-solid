import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jov0oyv-v.css';
import '../../css/d/d_nym14to.css';
import '../../css/n/nax8nabvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.32 19.25)" class="jov0oyv-v"/><rect transform="matrix(0 -1 -1 0 22.32 19.25)" class="d_nym14to"/><path class="nax8nabvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dock"} {...others} />);
}

export default Component;
