import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhd6iub4d.css';
import '../../css/p/p48qkyb0w.css';
import '../../css/l/lf3litbkr.css';
import '../../css/n/nc7_r_bsg.css';
import '../../css/f/fxx_6rb8s.css';
import '../../css/t/tyjx4fb0r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mhd6iub4d"/><path class="p48qkyb0w"/><path class="lf3litbkr"/><path class="nc7_r_bsg"/><path class="fxx_6rb8s"/><path class="tyjx4fb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-paw"} {...others} />);
}

export default Component;
