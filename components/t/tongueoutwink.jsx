import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/o/ozo_efbgj.css';
import '../../css/u/uhyhtqbek.css';
import '../../css/r/r4p9c-6wz.css';
import '../../css/y/yqar3bcsr.css';
import '../../css/e/ew_mgwbmu.css';
import '../../css/b/bbwvg1low.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="ozo_efbgj"/><path class="uhyhtqbek"/><path class="r4p9c-6wz"/><path class="yqar3bcsr"/><path class="ew_mgwbmu"/><path class="bbwvg1low"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tongueoutwink"} {...others} />);
}

export default Component;
