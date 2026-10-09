import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl_of99ub.css';
import '../../css/v/vucxpmn0x.css';
import '../../css/e/e2qoovbnc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tl_of99ub"/><path class="vucxpmn0x"/><path class="e2qoovbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:feed-in-48-bold"} {...others} />);
}

export default Component;
