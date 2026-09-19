import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu_deu4_z.css';
import '../../css/z/zduf8wb2t.css';
import '../../css/n/nwp2-7bok.css';
import '../../css/h/hf_cjtbhq.css';
import '../../css/x/x4c7ywban.css';
import '../../css/c/czzmpj-0h.css';
import '../../css/u/uugt7l2vg.css';
import '../../css/h/hso07ebiz.css';
import '../../css/i/ieugtgy_a.css';
import '../../css/f/ffi0gl6-p.css';
import '../../css/l/levvisiyu.css';
import '../../css/l/lxzaqtbfn.css';
import '../../css/f/fo9h3fbil.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="zu_deu4_z"/><path clip-rule="evenodd" class="zduf8wb2t"/><path class="nwp2-7bok"/><path clip-rule="evenodd" class="hf_cjtbhq"/><path class="x4c7ywban"/><path clip-rule="evenodd" class="czzmpj-0h"/><path class="uugt7l2vg"/><path clip-rule="evenodd" class="hso07ebiz"/><path class="ieugtgy_a"/><path clip-rule="evenodd" class="ffi0gl6-p"/><path class="levvisiyu"/><path clip-rule="evenodd" class="lxzaqtbfn"/><path class="fo9h3fbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:form"} {...others} />);
}

export default Component;
