import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-33augld.css';
import '../../css/b/bxfwu8b_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g-33augld"/><path class="bxfwu8b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-planet"} {...others} />);
}

export default Component;
