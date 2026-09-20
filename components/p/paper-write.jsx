import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4vimfbwv.css';
import '../../css/k/kah16xbzz.css';
import '../../css/j/jf1pu11gy.css';
import '../../css/o/orzb_eumu.css';
import '../../css/y/yp4nu6nqn.css';
import '../../css/x/xbitrp-ny.css';
import '../../css/w/wqc16pb6e.css';
import '../../css/t/t-i50sbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w4vimfbwv"/><path class="kah16xbzz"/><path class="jf1pu11gy"/><path class="orzb_eumu"/><path class="yp4nu6nqn"/><path class="xbitrp-ny"/><path class="wqc16pb6e"/><path class="t-i50sbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:paper-write"} {...others} />);
}

export default Component;
