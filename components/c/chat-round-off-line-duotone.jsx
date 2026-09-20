import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xh228jcir.css';
import '../../css/n/ni-yiabiq.css';
import '../../css/i/i54hzebdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xh228jcir"/><path class="ni-yiabiq"/><path class="i54hzebdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-off-line-duotone"} {...others} />);
}

export default Component;
