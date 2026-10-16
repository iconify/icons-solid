import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihcg3e6qc.css';
import '../../css/n/nnq4tpzbo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ihcg3e6qc"/><path class="nnq4tpzbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rain-gauge-20"} {...others} />);
}

export default Component;
