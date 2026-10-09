import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc6qzlmiu.css';
import '../../css/k/kpa1g8jdv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qc6qzlmiu"/><path class="kpa1g8jdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pliers-48"} {...others} />);
}

export default Component;
