import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/glq-1qbjg.css';
import '../../css/m/m6t70kb9t.css';
import '../../css/l/lztux4j4y.css';
import '../../css/v/vpdai5bsv.css';
import '../../css/o/oc8o0iacg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="glq-1qbjg"/><path class="m6t70kb9t wm-shine"/><path class="lztux4j4y wm-k"/><path class="vpdai5bsv wm-a"/><path class="oc8o0iacg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:alarm-clock-check"} {...others} />);
}

export default Component;
