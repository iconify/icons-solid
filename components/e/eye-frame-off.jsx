import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/i8ddg_beo.css';
import '../../css/d/dxznuzbiv.css';
import '../../css/y/yksgaftlg.css';
import '../../css/m/mwsmyybbj.css';
import '../../css/g/gu84rhbhv.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="i8ddg_beo"/><path clip-rule="evenodd" class="dxznuzbiv"/></g><path clip-rule="evenodd" class="yksgaftlg"/><path clip-rule="evenodd" class="mwsmyybbj"/><path clip-rule="evenodd" class="gu84rhbhv"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:eye-frame-off"} {...others} />);
}

export default Component;
