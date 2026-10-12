import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-o72bbfc.css';
import '../../css/w/wx5enbbcm.css';
import '../../css/x/xr4_c7bsq.css';
import '../../css/t/t0rxeobhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f-o72bbfc"/><path class="wx5enbbcm"/><path class="xr4_c7bsq"/><path class="t0rxeobhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bug-play"} {...others} />);
}

export default Component;
