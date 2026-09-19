import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/m/m683htr5v.css';
import '../../css/x/xv2j8eb2f.css';
import '../../css/f/f47-hqwsy.css';
import '../../css/k/k2zm8rbgo.css';
import '../../css/o/o9b0ymuza.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="m683htr5v"/><path class="xv2j8eb2f"/><path class="f47-hqwsy"/></g><path class="k2zm8rbgo"/><path class="o9b0ymuza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:wifi-print"} {...others} />);
}

export default Component;
