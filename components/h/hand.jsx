import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fpa6mrbwu.css';
import '../../css/v/vv1xbqtza.css';
import '../../css/h/honu7ob_h.css';
import '../../css/t/t5kotlb-p.css';
import '../../css/e/eombknuag.css';
import '../../css/t/thawwccst.css';
import '../../css/m/mdrrkgbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fpa6mrbwu"/><path class="vv1xbqtza"/><path class="honu7ob_h wm-shine"/><path class="t5kotlb-p"/><path class="eombknuag"/><path class="thawwccst"/><path class="mdrrkgbcl wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hand"} {...others} />);
}

export default Component;
