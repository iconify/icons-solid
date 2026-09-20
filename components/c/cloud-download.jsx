import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/k/kuqma2mpi.css';
import '../../css/w/w4k9xcc_d.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="kuqma2mpi"/><path class="w4k9xcc_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cloud-download"} {...others} />);
}

export default Component;
