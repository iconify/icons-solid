import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixdm9acjc.css';
import '../../css/i/irl9z8uwq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ixdm9acjc"/><path class="irl9z8uwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-css3-outline"} {...others} />);
}

export default Component;
