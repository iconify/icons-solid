import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hkthlobuo.css';
import '../../css/j/jh-sujbvn.css';
import '../../css/v/vzy21dbim.css';
import '../../css/u/utm_h0hev.css';
import '../../css/p/prhfv0bxd.css';
import '../../css/e/eoq6vl_0c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hkthlobuo"/><path class="jh-sujbvn"/><path class="vzy21dbim"/><path class="utm_h0hev"/><path class="prhfv0bxd"/><path class="eoq6vl_0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sort-amount-down"} {...others} />);
}

export default Component;
