import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_9aq5btt.css';
import '../../css/k/k767t9bjs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z_9aq5btt"/><path class="k767t9bjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:fitness-outline"} {...others} />);
}

export default Component;
