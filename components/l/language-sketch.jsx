import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i4amvwbwl.css';
import '../../css/f/fvmv82ghl.css';
import '../../css/a/an3h92bpt.css';
import '../../css/z/zlqtewbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i4amvwbwl wm-k"/><path class="fvmv82ghl wm-a"/><path class="an3h92bpt wm-k"/><path class="wm-a zlqtewbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:language-sketch"} {...others} />);
}

export default Component;
