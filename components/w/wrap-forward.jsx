import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/o/ob96a9x6o.css';
import '../../css/i/iv0n5py_z.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="ob96a9x6o"/><path class="iv0n5py_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:wrap-forward"} {...others} />);
}

export default Component;
