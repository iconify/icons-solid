import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iszq-fbrp.css';
import '../../css/k/k3b73mscw.css';
import '../../css/i/i13dt1b6d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iszq-fbrp"/><path class="k3b73mscw"/><path class="i13dt1b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sluice-gate-48-bold"} {...others} />);
}

export default Component;
