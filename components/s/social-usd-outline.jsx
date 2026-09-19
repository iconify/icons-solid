import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv4biccwc.css';
import '../../css/o/oa67cbk0z.css';
import '../../css/v/v-i1hztch.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yv4biccwc"/><path class="oa67cbk0z"/><path class="v-i1hztch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-usd-outline"} {...others} />);
}

export default Component;
