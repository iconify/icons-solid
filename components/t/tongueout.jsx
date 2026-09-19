import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/a/ayh_embfz.css';
import '../../css/e/e8dapdehd.css';
import '../../css/e/ew_mgwbmu.css';
import '../../css/b/bbwvg1low.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="ayh_embfz"/><path class="e8dapdehd"/><path class="ew_mgwbmu"/><path class="bbwvg1low"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tongueout"} {...others} />);
}

export default Component;
