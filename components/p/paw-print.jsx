import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wh0_olksw.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/b/b_90hnbhs.css';
import '../../css/d/daf6h8b0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="wh0_olksw"/><circle transform="matrix(-1 0 0 1 17.492 4)" class="np1e_hbeg"/><circle class="b_90hnbhs"/><circle transform="matrix(-1 0 0 1 21.992 9)" class="np1e_hbeg"/><path class="daf6h8b0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paw-print"} {...others} />);
}

export default Component;
