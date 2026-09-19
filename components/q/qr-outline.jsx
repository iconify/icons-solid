import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jogymhwgx.css';
import '../../css/d/dtmit_b-y.css';
import '../../css/v/vbrlhabtz.css';
import '../../css/o/oueyrxb3p.css';
import '../../css/g/g4d3ukbex.css';
import '../../css/w/w6hlgmbsp.css';
import '../../css/p/pm7ceck-s.css';
import '../../css/a/a49av-bxk.css';
import '../../css/t/t4d-_lk5w.css';
import '../../css/z/z6mcimbim.css';
import '../../css/v/vv_jrzc0a.css';
import '../../css/z/zzq1rmbfy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jogymhwgx"/><path clip-rule="evenodd" class="dtmit_b-y"/><path clip-rule="evenodd" class="vbrlhabtz"/><path clip-rule="evenodd" class="oueyrxb3p"/><path class="g4d3ukbex"/><path class="w6hlgmbsp"/><path clip-rule="evenodd" class="pm7ceck-s"/><path clip-rule="evenodd" class="a49av-bxk"/><path clip-rule="evenodd" class="t4d-_lk5w"/><path clip-rule="evenodd" class="z6mcimbim"/><path class="vv_jrzc0a"/><path class="zzq1rmbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:qr-outline"} {...others} />);
}

export default Component;
