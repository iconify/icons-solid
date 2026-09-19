import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrbpuobsp.css';
import '../../css/a/a_k2ufbcq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mrbpuobsp"/><path class="a_k2ufbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:circle-down"} {...others} />);
}

export default Component;
