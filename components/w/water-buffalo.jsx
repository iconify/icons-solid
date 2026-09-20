import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erqpayvqc.css';
import '../../css/c/cct_bkbvl.css';
import '../../css/i/idoya6bsi.css';
import '../../css/l/lngur_d5a.css';
import '../../css/c/crgbiyvds.css';
import '../../css/h/h5_h27bub.css';
import '../../css/t/t2x3edc_n.css';
import '../../css/q/qmy78bktu.css';
import '../../css/x/xo1v3xeiy.css';
import '../../css/v/v1vcsay1c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="erqpayvqc"/><path class="cct_bkbvl"/><path class="idoya6bsi"/><path class="lngur_d5a"/><path class="crgbiyvds"/><path class="h5_h27bub"/><path class="t2x3edc_n"/><path class="qmy78bktu"/><path class="xo1v3xeiy"/><path class="v1vcsay1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:water-buffalo"} {...others} />);
}

export default Component;
