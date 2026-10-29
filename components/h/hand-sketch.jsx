import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rf8yh-27v.css';
import '../../css/l/llsjouo2v.css';
import '../../css/g/g_sh4b3bp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rf8yh-27v"/><path class="llsjouo2v"/><path class="g_sh4b3bp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-sketch"} {...others} />);
}

export default Component;
