import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nlhc2tvbm.css';
import '../../css/f/faj9jjs2h.css';
import '../../css/v/ve68nabsz.css';
import '../../css/m/m7fbg6vvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nlhc2tvbm wm-k"/><path class="faj9jjs2h wm-k"/><path class="ve68nabsz wm-a"/><path class="m7fbg6vvg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-up-sketch"} {...others} />);
}

export default Component;
