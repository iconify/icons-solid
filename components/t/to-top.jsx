import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rv2yhcbae.css';
import '../../css/k/kun-rwb_i.css';
import '../../css/y/y1m_lyb3x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rv2yhcbae"/><path class="kun-rwb_i"/><path class="y1m_lyb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:to-top"} {...others} />);
}

export default Component;
