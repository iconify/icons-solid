import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcuiagbyi.css';
import '../../css/n/npljsd2il.css';
import '../../css/p/pmb2cfqbq.css';
import '../../css/y/ys_zp-h_v.css';
import '../../css/d/dm7mc6eqy.css';
import '../../css/e/egn0mtbbh.css';
import '../../css/h/hmvst5bca.css';
import '../../css/i/i2u_v4bag.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mcuiagbyi"/><path class="npljsd2il"/><path class="pmb2cfqbq"/><path class="ys_zp-h_v"/><path class="dm7mc6eqy"/><path class="egn0mtbbh"/><path class="hmvst5bca"/><path class="i2u_v4bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-color-wand-outline"} {...others} />);
}

export default Component;
