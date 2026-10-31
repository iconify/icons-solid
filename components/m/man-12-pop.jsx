import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0c_ah97o.css';
import '../../css/z/zts51grna.css';
import '../../css/o/oouyjibne.css';
import '../../css/q/qfr_hr3dt.css';
import '../../css/z/z-jrqkbzw.css';
import '../../css/w/wym3hvbtc.css';
import '../../css/e/ef876zb_k.css';
import '../../css/c/cju98ygfk.css';
import '../../css/g/gw8yx-0ln.css';
import '../../css/j/j-gi117uz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b0c_ah97o"/><path class="zts51grna"/><path class="oouyjibne"/><path class="qfr_hr3dt"/><path class="z-jrqkbzw"/><path class="wym3hvbtc"/><path clip-rule="evenodd" class="ef876zb_k"/><path class="cju98ygfk"/><path class="gw8yx-0ln"/><path clip-rule="evenodd" class="j-gi117uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:man-12-pop"} {...others} />);
}

export default Component;
