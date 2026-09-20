import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/k/kuqma2mpi.css';
import '../../css/e/evruvkbii.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="kuqma2mpi"/><path class="evruvkbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cloud-upload"} {...others} />);
}

export default Component;
