import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gza0lnxru.css';
import '../../css/e/e6mnr5buq.css';
import '../../css/j/jcyd-oqqf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gza0lnxru"/><path class="e6mnr5buq"/><path class="jcyd-oqqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:xor-gate-20"} {...others} />);
}

export default Component;
