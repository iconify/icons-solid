import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/k84t0ebpb.css';
import '../../css/p/pj4r5mw8r.css';
import '../../css/h/hnzhq2bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="k84t0ebpb"/><path class="pj4r5mw8r"/><path class="hnzhq2bzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:point-of-sale-outline"} {...others} />);
}

export default Component;
