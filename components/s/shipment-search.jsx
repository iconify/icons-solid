import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-aqiqbze.css';
import '../../css/r/rdzk0043f.css';
import '../../css/j/jnropfb7n.css';
import '../../css/k/k1g5p4y9j.css';
import '../../css/r/rgn42yb-i.css';
import '../../css/c/c80axnbny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v-aqiqbze"/><path class="rdzk0043f"/><path class="jnropfb7n"/><path class="k1g5p4y9j"/><path class="rgn42yb-i"/><path class="c80axnbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-search"} {...others} />);
}

export default Component;
