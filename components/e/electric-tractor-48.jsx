import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3k9_ypge.css';
import '../../css/q/q_ao3jb5h.css';
import '../../css/q/qjx-16ssr.css';
import '../../css/i/i1g66_y5w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f3k9_ypge"/><path class="q_ao3jb5h"/><path class="qjx-16ssr"/><path class="i1g66_y5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-tractor-48"} {...others} />);
}

export default Component;
