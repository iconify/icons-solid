import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6ws95bmc.css';
import '../../css/g/gtwn_2b4z.css';
import '../../css/l/lsfhf11ql.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e6ws95bmc"/><path class="gtwn_2b4z"/><path class="lsfhf11ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:meeting-48"} {...others} />);
}

export default Component;
