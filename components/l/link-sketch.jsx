import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1wls693y.css';
import '../../css/i/i-ml486ue.css';
import '../../css/d/dmqvzwbzf.css';
import '../../css/o/oida52bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l1wls693y wm-k"/><path class="i-ml486ue wm-a"/><path class="dmqvzwbzf wm-k"/><path class="oida52bfh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:link-sketch"} {...others} />);
}

export default Component;
