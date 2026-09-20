import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kolxl5buq.css';
import '../../css/d/dponnbbeh.css';
import '../../css/t/tap0fvbco.css';
import '../../css/i/ii71mcc5c.css';
import '../../css/z/zts5oc3bb.css';
import '../../css/q/qqm4clkrl.css';
import '../../css/e/e-cu9xszz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kolxl5buq"/><path class="dponnbbeh"/><path class="tap0fvbco"/><path class="ii71mcc5c"/><path class="zts5oc3bb"/><path class="qqm4clkrl"/><path class="e-cu9xszz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:show-theater-masks"} {...others} />);
}

export default Component;
