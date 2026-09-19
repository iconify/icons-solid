import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puprfgbwf.css';
import '../../css/l/l4c0pyu-o.css';
import '../../css/o/o0t4i5bsr.css';
import '../../css/i/iz38_ub4f.css';
import '../../css/i/i_ph9ybqc.css';
import '../../css/n/nqx6ihbsf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="puprfgbwf"/><path clip-rule="evenodd" class="l4c0pyu-o"/><path class="o0t4i5bsr"/><path class="iz38_ub4f"/><path class="i_ph9ybqc"/><path class="nqx6ihbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:save"} {...others} />);
}

export default Component;
