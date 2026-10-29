import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uzcqkeblz.css';
import '../../css/a/awnu8db8z.css';
import '../../css/x/xd7rb_b1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uzcqkeblz wm-k"/><path class="awnu8db8z wm-k"/><path class="wm-a xd7rb_b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:puja-thali-sketch"} {...others} />);
}

export default Component;
