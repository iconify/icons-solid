import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfpn6w7ca.css';
import '../../css/a/a2enu0stn.css';
import '../../css/f/fe-0ptbwe.css';
import '../../css/n/n1vfwo7wu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfpn6w7ca"/><path class="a2enu0stn"/><path class="fe-0ptbwe"/><path class="n1vfwo7wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-call-bold-duotone"} {...others} />);
}

export default Component;
