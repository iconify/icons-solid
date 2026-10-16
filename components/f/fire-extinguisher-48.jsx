import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m24wi8bnz.css';
import '../../css/n/ntd2yfzrm.css';
import '../../css/b/bi_k8i90y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m24wi8bnz"/><path class="ntd2yfzrm"/><path class="bi_k8i90y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-extinguisher-48"} {...others} />);
}

export default Component;
