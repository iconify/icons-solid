import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nb_fhzbee.css';
import '../../css/f/f-3d8rbtb.css';
import '../../css/s/s6es03xrf.css';
import '../../css/i/i7y13bc4y.css';
import '../../css/b/btswapx3u.css';
import '../../css/b/bco3ug89k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nb_fhzbee"/><path class="f-3d8rbtb"/><path class="s6es03xrf"/><path class="i7y13bc4y"/><path class="btswapx3u"/><path class="bco3ug89k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:barcode-scan-broken"} {...others} />);
}

export default Component;
