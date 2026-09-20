import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lllss6bpg.css';
import '../../css/y/y1tn0ihmy.css';
import '../../css/b/beh9x8bct.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lllss6bpg"/><path clip-rule="evenodd" class="y1tn0ihmy"/><path class="beh9x8bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-build-flat"} {...others} />);
}

export default Component;
