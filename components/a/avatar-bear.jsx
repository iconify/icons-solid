import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx7awmbxt.css';
import '../../css/t/tworh6b6a.css';
import '../../css/s/sqise2bpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yx7awmbxt"/><path class="tworh6b6a wm-shine"/><path class="sqise2bpb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-bear"} {...others} />);
}

export default Component;
