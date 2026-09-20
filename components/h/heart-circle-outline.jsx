import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/awfw_5bbu.css';
import '../../css/q/q4z7accis.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="h01tyzbfu"><path class="awfw_5bbu"/><path class="q4z7accis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:heart-circle-outline"} {...others} />);
}

export default Component;
