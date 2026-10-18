import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifp1qh_-h.css';
import '../../css/w/wfx3nk7mg.css';
import '../../css/m/mzbpuy9cm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ifp1qh_-h"/><path class="wfx3nk7mg"/><path class="mzbpuy9cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scour-protection-48"} {...others} />);
}

export default Component;
