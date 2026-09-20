import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18j-rbjv.css';
import '../../css/p/pwb0grfew.css';
import '../../css/i/iqlqlwbdl.css';
import '../../css/q/qrafe3brc.css';
import '../../css/k/k373libla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18j-rbjv"/><path class="pwb0grfew"/><path class="iqlqlwbdl"/><path class="qrafe3brc"/><path class="k373libla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-code-bold-duotone"} {...others} />);
}

export default Component;
