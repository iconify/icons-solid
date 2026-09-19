import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl54b9bcm.css';
import '../../css/o/oy01ueb7k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fl54b9bcm"/><path class="oy01ueb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:calendar"} {...others} />);
}

export default Component;
