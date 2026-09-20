import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6lafhbvk.css';
import '../../css/w/w6ca74b2j.css';
import '../../css/s/smls78shz.css';
import '../../css/n/nau4w8dar.css';
import '../../css/n/n787bfb7v.css';
import '../../css/p/py99o21wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c6lafhbvk"/><path class="w6ca74b2j"/><path class="smls78shz"/><path class="nau4w8dar"/><path class="n787bfb7v"/><path class="py99o21wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-broken"} {...others} />);
}

export default Component;
