import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/h/h0w_13b-h.css';
import '../../css/l/lmf-wx_qn.css';
import '../../css/m/mb-zhe77t.css';
import '../../css/n/ner99k50k.css';
import '../../css/m/muh94cb_x.css';
import '../../css/j/j6o4ywbpv.css';
import '../../css/v/van1r5b0a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="h0w_13b-h"/><path class="lmf-wx_qn"/><path class="mb-zhe77t"/><path class="ner99k50k"/><path class="muh94cb_x"/><path class="j6o4ywbpv"/><path class="van1r5b0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:strawberry"} {...others} />);
}

export default Component;
