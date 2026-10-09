import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpeu_j1mo.css';
import '../../css/m/mkzcfdbha.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpeu_j1mo"/><path class="mkzcfdbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crosshair-48"} {...others} />);
}

export default Component;
