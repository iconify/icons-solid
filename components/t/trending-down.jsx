import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wev0scb4m.css';
import '../../css/m/mi0qv-kbj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wev0scb4m"/><path class="mi0qv-kbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trending-down"} {...others} />);
}

export default Component;
