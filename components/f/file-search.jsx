import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/york7unoz.css';
import '../../css/m/ml-d97bvg.css';
import '../../css/r/rlzn5sbec.css';
import '../../css/v/vm52libzx.css';
import '../../css/p/p474j27dg.css';
import '../../css/p/p2kd7bchk.css';
import '../../css/r/rz49cqbxr.css';
import '../../css/r/ri3g6cbfw.css';
import '../../css/c/ce0gevbad.css';
import '../../css/s/s65tiebho.css';
import '../../css/c/cb_iemb-y.css';
import '../../css/j/jh6vvacju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow york7unoz"/><path class="ml-d97bvg wm-shadow"/><path class="rlzn5sbec"/><path class="vm52libzx"/><path class="p474j27dg"/><path class="p2kd7bchk"/><path class="rz49cqbxr"/><path class="ri3g6cbfw"/><path class="ce0gevbad"/><path class="s65tiebho"/><path class="cb_iemb-y"/><path class="jh6vvacju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:file-search"} {...others} />);
}

export default Component;
