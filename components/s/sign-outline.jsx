import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/stydbab6j.css';
import '../../css/k/k84t0ebpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="stydbab6j"/><rect class="k84t0ebpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sign-outline"} {...others} />);
}

export default Component;
