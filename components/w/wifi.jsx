import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/auv1wpb8c.css';
import '../../css/p/puhknjl3i.css';
import '../../css/s/sdyp_4liq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="auv1wpb8c"/><path class="puhknjl3i"/><path class="sdyp_4liq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:wifi"} {...others} />);
}

export default Component;
