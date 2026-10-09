import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbzdxvbap.css';
import '../../css/k/kc18vwbzr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mbzdxvbap"/><path class="kc18vwbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-air-balloon-48-bold"} {...others} />);
}

export default Component;
