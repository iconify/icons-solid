import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6a66hhkg.css';
import '../../css/h/h2yezpf2d.css';
import '../../css/e/ev4sdmbvj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q6a66hhkg"/><path class="h2yezpf2d"/><path class="ev4sdmbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-balancing-48"} {...others} />);
}

export default Component;
