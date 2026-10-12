import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l46kpabms.css';
import '../../css/v/vca0g8bfr.css';
import '../../css/q/q9qit9bpf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l46kpabms"/><path class="vca0g8bfr"/><path class="q9qit9bpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:split-48-bold"} {...others} />);
}

export default Component;
