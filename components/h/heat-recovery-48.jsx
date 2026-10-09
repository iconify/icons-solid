import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt8wqvb9w.css';
import '../../css/f/ft8kw_b7z.css';
import '../../css/t/tfewnyb2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kt8wqvb9w"/><path class="ft8kw_b7z"/><path class="tfewnyb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-recovery-48"} {...others} />);
}

export default Component;
