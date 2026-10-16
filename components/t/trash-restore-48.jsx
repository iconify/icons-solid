import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8qaagfdl.css';
import '../../css/v/vqmz5ehmr.css';
import '../../css/e/ecunmc8kn.css';
import '../../css/o/o46a8ibtl.css';
import '../../css/a/af-1brbju.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l8qaagfdl"/><path class="vqmz5ehmr"/><path class="ecunmc8kn"/><path class="o46a8ibtl"/><path class="af-1brbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trash-restore-48"} {...others} />);
}

export default Component;
