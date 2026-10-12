import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prt_k_bso.css';
import '../../css/k/koi711brx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="prt_k_bso"/><path class="koi711brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mushroom-20"} {...others} />);
}

export default Component;
