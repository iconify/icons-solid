import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk6bueb8t.css';
import '../../css/h/h_b3i0b0d.css';
import '../../css/m/m1bq2ob8f.css';
import '../../css/f/fut7gqt3j.css';
import '../../css/m/mht5w3oqs.css';
import '../../css/t/te0oy_b_p.css';
import '../../css/c/cp1feccao.css';
import '../../css/n/nk_6sm-8k.css';
import '../../css/o/ohkbmqu8x.css';
import '../../css/t/tywj39b9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk6bueb8t wm-shadow"/><path class="h_b3i0b0d wm-k"/><path class="m1bq2ob8f wm-k"/><path class="fut7gqt3j wm-k"/><path class="mht5w3oqs wm-k"/><path class="te0oy_b_p wm-k"/><path class="cp1feccao wm-shine"/><path class="nk_6sm-8k wm-k"/><path class="ohkbmqu8x wm-k"/><path class="tywj39b9a wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:avatar-bear"} {...others} />);
}

export default Component;
