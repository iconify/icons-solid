import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rcu0y_wjn.css';
import '../../css/f/f0gjgkb7s.css';
import '../../css/k/k5axyabbr.css';
import '../../css/o/ohitj-nsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rcu0y_wjn"/><path class="f0gjgkb7s"/><path class="k5axyabbr"/><path class="ohitj-nsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-minimalistic-broken"} {...others} />);
}

export default Component;
