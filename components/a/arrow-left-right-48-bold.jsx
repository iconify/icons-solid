import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfmifebfq.css';
import '../../css/c/c4iz7xb8s.css';
import '../../css/q/qdy37eb-k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rfmifebfq"/><path class="c4iz7xb8s"/><path class="qdy37eb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-right-48-bold"} {...others} />);
}

export default Component;
