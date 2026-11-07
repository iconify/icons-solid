import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lfpfczh4t.css';
import '../../css/z/zl3fw2elx.css';
import '../../css/l/lywtx37wy.css';
import '../../css/y/y-uxy98jv.css';
import '../../css/m/mk09shb8p.css';
import '../../css/t/t-j_eedxl.css';
import '../../css/d/dziiqebqk.css';
import '../../css/u/u0vfu357j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lfpfczh4t"/><path class="zl3fw2elx"/><path class="lywtx37wy"/><path class="y-uxy98jv"/><path class="mk09shb8p"/><path class="t-j_eedxl"/><path class="dziiqebqk"/><path class="u0vfu357j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-columns-split-linear"} {...others} />);
}

export default Component;
