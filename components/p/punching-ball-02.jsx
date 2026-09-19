import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n-nt2-bny.css';
import '../../css/n/nuvpd_bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n-nt2-bny"/><path class="nuvpd_bka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:punching-ball-02"} {...others} />);
}

export default Component;
