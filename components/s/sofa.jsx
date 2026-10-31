import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t16ny9ola.css';
import '../../css/f/fn-fcv_xe.css';
import '../../css/b/bfr7juptc.css';
import '../../css/v/vb2p5dizq.css';
import '../../css/n/nzuoa76rj.css';
import '../../css/w/w668tubko.css';
import '../../css/g/gu8elbbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t16ny9ola wm-k"/><path class="fn-fcv_xe wm-deco"/><path class="bfr7juptc wm-k"/><path class="vb2p5dizq wm-k"/><path class="nzuoa76rj wm-shadow"/><path class="w668tubko wm-shine"/><path class="gu8elbbth wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:sofa"} {...others} />);
}

export default Component;
