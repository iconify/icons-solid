import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpeu_j1mo.css';
import '../../css/c/cmhnqibcc.css';
import '../../css/w/wqsnrac2k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpeu_j1mo"/><path class="cmhnqibcc"/><path class="wqsnrac2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-donut-48"} {...others} />);
}

export default Component;
