import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inizydo0z.css';
import '../../css/q/qy7v0ra7k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="inizydo0z"/><path class="qy7v0ra7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drawing-compass-48"} {...others} />);
}

export default Component;
