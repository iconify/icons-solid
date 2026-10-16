import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vywkd9w8n.css';
import '../../css/a/a8-928hoq.css';
import '../../css/c/cylgu_k9i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vywkd9w8n"/><path class="a8-928hoq"/><path class="cylgu_k9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-optimiser-48"} {...others} />);
}

export default Component;
