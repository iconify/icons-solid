import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvgtklzub.css';
import '../../css/r/rcy948b8o.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="wvgtklzub"/><path class="rcy948b8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:graph-pie"} {...others} />);
}

export default Component;
