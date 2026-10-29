import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2z65sb5x.css';
import '../../css/s/svy2tsdts.css';
import '../../css/o/o1099kbtp.css';
import '../../css/x/x_fxodbys.css';
import '../../css/i/iusb32bjg.css';
import '../../css/y/y9vnhbbhp.css';
import '../../css/n/ny35abigz.css';
import '../../css/e/e0w2m6bna.css';
import '../../css/c/cg-4uacpt.css';
import '../../css/x/xf5-sqt6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l2z65sb5x wm-shadow"/><path class="svy2tsdts wm-k"/><path class="o1099kbtp wm-k"/><path class="wm-k x_fxodbys"/><path class="iusb32bjg wm-k"/><path class="wm-a y9vnhbbhp"/><path class="ny35abigz wm-a"/><path class="e0w2m6bna wm-a"/><path class="cg-4uacpt wm-a"/><path class="wm-a xf5-sqt6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:utensils-crossed"} {...others} />);
}

export default Component;
