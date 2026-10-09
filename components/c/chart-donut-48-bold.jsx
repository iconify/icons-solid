import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4vli7ncu.css';
import '../../css/q/qkvjsbbnn.css';
import '../../css/k/klpkadckn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j4vli7ncu"/><path class="qkvjsbbnn"/><path class="klpkadckn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-donut-48-bold"} {...others} />);
}

export default Component;
