import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no8_0h65g.css';
import '../../css/e/eyio-_5vq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="no8_0h65g"/><path class="eyio-_5vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:depot-charging-20"} {...others} />);
}

export default Component;
