import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yzgi8xb4w.css';
import '../../css/o/ov9ho64it.css';
import '../../css/d/disb1cb5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-a yzgi8xb4w"/><path class="ov9ho64it wm-k"/><path class="disb1cb5z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-network-sketch"} {...others} />);
}

export default Component;
