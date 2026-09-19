import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/ssh2mccsr.css';
import '../../css/s/szcqc6hpb.css';
import '../../css/b/bpuqtn53z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ssh2mccsr"/><path class="szcqc6hpb"/><path class="bpuqtn53z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:address-book"} {...others} />);
}

export default Component;
