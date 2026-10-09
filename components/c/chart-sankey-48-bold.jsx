import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-_cnnjai.css';
import '../../css/q/qi1j3qboz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h-_cnnjai"/><path class="qi1j3qboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-sankey-48-bold"} {...others} />);
}

export default Component;
