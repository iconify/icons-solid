import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/j/ja_0od71p.css';
import '../../css/p/pl0d48o7j.css';
import '../../css/w/wddphhbzi.css';
import '../../css/h/hmcd_kbpr.css';
import '../../css/u/u08gxpbrl.css';
import '../../css/r/rochh0b5x.css';
import '../../css/k/kwrkgxb3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ua_8dab4r"/><path class="ja_0od71p"/><path class="pl0d48o7j"/><path class="wddphhbzi"/><path class="hmcd_kbpr"/><path class="u08gxpbrl"/><path class="rochh0b5x"/><path class="kwrkgxb3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:structure-linear"} {...others} />);
}

export default Component;
