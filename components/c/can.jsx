import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqc2wg0eh.css';
import '../../css/a/ap6ym8bpq.css';
import '../../css/g/gj26gdbil.css';
import '../../css/p/pnn193b0s.css';
import '../../css/m/m15_1sz-a.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="nqc2wg0eh"/><path clip-rule="evenodd" class="ap6ym8bpq"/><path clip-rule="evenodd" class="gj26gdbil"/><path class="pnn193b0s"/><path class="m15_1sz-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:can"} {...others} />);
}

export default Component;
