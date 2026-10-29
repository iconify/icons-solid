import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_mc1qqwj.css';
import '../../css/l/lc5-cmbvd.css';
import '../../css/j/j37f6wbqg.css';
import '../../css/y/y5-j9lbty.css';
import '../../css/x/xte_7gbpv.css';
import '../../css/p/p3_1ncsgy.css';
import '../../css/g/g9knn4bno.css';
import '../../css/n/ny_a9lbeu.css';
import '../../css/f/fbimyac3w.css';
import '../../css/z/zhmkcdc6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_mc1qqwj wm-shadow"/><path class="lc5-cmbvd wm-shadow"/><path class="j37f6wbqg"/><path class="y5-j9lbty"/><path class="xte_7gbpv"/><path class="p3_1ncsgy"/><path class="g9knn4bno"/><path class="ny_a9lbeu"/><path class="fbimyac3w"/><path class="zhmkcdc6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:microwave"} {...others} />);
}

export default Component;
