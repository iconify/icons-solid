import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/z/z9fyfnbpk.css';
import '../../css/y/ykbeh9bqu.css';
import '../../css/l/lz22xst6e.css';
import '../../css/j/jsbu-tb6f.css';
import '../../css/s/s0mrlwbgd.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="z9fyfnbpk"/><path clip-rule="evenodd" class="ykbeh9bqu"/><path clip-rule="evenodd" class="lz22xst6e"/><path clip-rule="evenodd" class="jsbu-tb6f"/><path clip-rule="evenodd" class="s0mrlwbgd"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:enter-circle"} {...others} />);
}

export default Component;
