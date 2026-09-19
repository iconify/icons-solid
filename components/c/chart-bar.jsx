import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8x1c9bmh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k8x1c9bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:chart-bar"} {...others} />);
}

export default Component;
