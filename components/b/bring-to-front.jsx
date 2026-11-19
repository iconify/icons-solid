import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vl_w8n0cw.css';
import '../../css/l/lmxu9zjdc.css';
import '../../css/q/q63yn0pph.css';
import '../../css/t/tdqgxtbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vl_w8n0cw"/><path class="lmxu9zjdc"/><path class="q63yn0pph"/><path class="tdqgxtbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bring-to-front"} {...others} />);
}

export default Component;
