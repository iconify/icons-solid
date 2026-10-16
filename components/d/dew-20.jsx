import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4x8k8clu.css';
import '../../css/k/kiv3_z61q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k4x8k8clu"/><path class="kiv3_z61q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dew-20"} {...others} />);
}

export default Component;
