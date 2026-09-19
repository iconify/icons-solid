import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z0zpwrm_j.css';
import '../../css/v/vpev52slb.css';
import '../../css/p/p0zx2fg1f.css';
import '../../css/g/gydh0qoul.css';
import '../../css/v/vil3rbbxe.css';
import '../../css/i/i7hwqruak.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z0zpwrm_j"/><path clip-rule="evenodd" class="vpev52slb"/><path clip-rule="evenodd" class="p0zx2fg1f"/><path class="gydh0qoul"/><path clip-rule="evenodd" class="vil3rbbxe"/><path class="i7hwqruak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:train-print"} {...others} />);
}

export default Component;
