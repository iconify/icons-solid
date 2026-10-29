import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/spfuxgbyh.css';
import '../../css/q/qwd_5p9df.css';
import '../../css/n/n-yhscb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="spfuxgbyh"/><path class="qwd_5p9df wm-k"/><path class="n-yhscb1g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-snow-sketch"} {...others} />);
}

export default Component;
