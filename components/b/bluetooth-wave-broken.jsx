import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bmt38ebpo.css';
import '../../css/s/s5eh35bzd.css';
import '../../css/h/hixqu8e0n.css';
import '../../css/m/mioco9dwm.css';
import '../../css/d/d66crdbhn.css';
import '../../css/y/ymq-tib4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bmt38ebpo"/><path class="s5eh35bzd"/><path class="hixqu8e0n"/><path class="mioco9dwm"/><path class="d66crdbhn"/><path class="ymq-tib4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-wave-broken"} {...others} />);
}

export default Component;
