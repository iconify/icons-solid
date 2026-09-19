import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alo-h7bmj.css';
import '../../css/b/bxhrv3bpw.css';
import '../../css/q/q0-dmmbeh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="alo-h7bmj"/><path clip-rule="evenodd" class="bxhrv3bpw"/><path class="q0-dmmbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ambulance"} {...others} />);
}

export default Component;
