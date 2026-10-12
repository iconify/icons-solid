import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su-w6wf-n.css';
import '../../css/q/qvm9k_b5g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="su-w6wf-n"/><path class="qvm9k_b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-can-48"} {...others} />);
}

export default Component;
