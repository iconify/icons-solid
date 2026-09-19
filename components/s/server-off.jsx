import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yvsdj-byp.css';
import '../../css/b/bybz0tjxq.css';
import '../../css/n/nj1ev_b1z.css';
import '../../css/f/fvpfrkbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yvsdj-byp"/><path class="bybz0tjxq"/><path class="nj1ev_b1z"/><path class="fvpfrkbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:server-off"} {...others} />);
}

export default Component;
