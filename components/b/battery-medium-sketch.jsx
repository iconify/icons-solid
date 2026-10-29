import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/leetrzeag.css';
import '../../css/i/ih39qpbch.css';
import '../../css/y/yjgegjbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="leetrzeag wm-a"/><path class="ih39qpbch wm-k"/><path class="wm-a yjgegjbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-medium-sketch"} {...others} />);
}

export default Component;
