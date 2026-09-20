import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhbyxpbbq.css';
import '../../css/p/pk02s0tyu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zhbyxpbbq"/><path class="pk02s0tyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:erugo-light"} {...others} />);
}

export default Component;
