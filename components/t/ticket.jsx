import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/ao_c3l20n.css';
import '../../css/i/indpwobmx.css';
import '../../css/t/t_ndapeid.css';
import '../../css/q/q-55d_bvt.css';
import '../../css/o/or-t-y_mm.css';
import '../../css/i/iein45p2m.css';
import '../../css/k/kovzv6bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ao_c3l20n"/><path class="indpwobmx"/><path class="t_ndapeid wm-shine"/><path class="q-55d_bvt wm-k"/><path class="or-t-y_mm wm-a"/><path class="iein45p2m"/><path class="kovzv6bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ticket"} {...others} />);
}

export default Component;
