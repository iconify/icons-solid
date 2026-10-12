import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/v/vsfu1boez.css';
import '../../css/k/kx_j2o2wy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="vsfu1boez"/><path class="kx_j2o2wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-up-48"} {...others} />);
}

export default Component;
