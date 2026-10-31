import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vpnx13m7x.css';
import '../../css/a/a9kyadc1z.css';
import '../../css/v/vselxpb6i.css';
import '../../css/i/i4eynmq8u.css';
import '../../css/z/zm-bw5b_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vpnx13m7x wm-shadow"/><path class="a9kyadc1z wm-shadow"/><path class="vselxpb6i"/><path class="i4eynmq8u"/><path class="zm-bw5b_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-pair"} {...others} />);
}

export default Component;
