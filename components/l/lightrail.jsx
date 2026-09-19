import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww_dny5rn.css';
import '../../css/m/m0kdcfbke.css';
import '../../css/f/fa_48euey.css';
import '../../css/y/y66ewlbak.css';
import '../../css/m/mr6vmhblg.css';
import '../../css/m/m-wbo0bmw.css';
import '../../css/c/c1uo6ab4p.css';
import '../../css/r/rigrabbjo.css';
import '../../css/u/uhisegbzy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ww_dny5rn"/><path class="m0kdcfbke"/><path class="fa_48euey"/><path class="y66ewlbak"/><path class="mr6vmhblg"/><path class="m-wbo0bmw"/><path class="c1uo6ab4p"/><path class="rigrabbjo"/><path class="uhisegbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lightrail"} {...others} />);
}

export default Component;
