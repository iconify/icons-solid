import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fdjurbb4m.css';
import '../../css/v/v3urzcmtg.css';
import '../../css/u/ubcgvnbmm.css';
import '../../css/u/u6r4zmb_q.css';
import '../../css/w/waq0-og1z.css';
import '../../css/t/t47814bum.css';
import '../../css/e/el8g0ub8b.css';
import '../../css/h/hn9qulmtx.css';
import '../../css/j/jnv10_-rm.css';
import '../../css/s/spm1zbbuy.css';
import '../../css/h/hdqej3ble.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="fdjurbb4m"/><path class="v3urzcmtg"/><path class="ubcgvnbmm"/><path class="u6r4zmb_q"/><path class="waq0-og1z"/><path class="t47814bum"/><path class="el8g0ub8b"/><path class="hn9qulmtx"/><path class="jnv10_-rm"/><path class="spm1zbbuy"/><path class="hdqej3ble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:gluten-free"} {...others} />);
}

export default Component;
