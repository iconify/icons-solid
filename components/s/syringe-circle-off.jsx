import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/c/cmnjqccwy.css';
import '../../css/a/akxs6rb3u.css';
import '../../css/e/e39n-3-ig.css';
import '../../css/d/dk60l9bsd.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="cmnjqccwy"/><path clip-rule="evenodd" class="akxs6rb3u"/><path class="e39n-3-ig"/><path class="dk60l9bsd"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:syringe-circle-off"} {...others} />);
}

export default Component;
