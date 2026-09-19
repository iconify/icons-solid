import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c75q14plq.css';
import '../../css/r/r2erxnb7t.css';
import '../../css/a/ao_2tkpff.css';
import '../../css/a/av160dcvj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c75q14plq"/><path class="r2erxnb7t"/><path class="ao_2tkpff"/><path class="av160dcvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:battery-charging-outline"} {...others} />);
}

export default Component;
