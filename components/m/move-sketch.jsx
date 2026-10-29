import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/ddoztfbry.css';
import '../../css/f/ftse9tv2o.css';
import '../../css/n/nuri-pjqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ddoztfbry wm-k"/><path class="ftse9tv2o wm-k"/><path class="nuri-pjqg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:move-sketch"} {...others} />);
}

export default Component;
