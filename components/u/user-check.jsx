import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/feo_n0bpa.css';
import '../../css/t/tie_amhlk.css';
import '../../css/e/emha3wbqe.css';
import '../../css/v/vxrha6-ej.css';
import '../../css/b/blawizb7e.css';
import '../../css/e/evjjbybyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="feo_n0bpa"/><path class="tie_amhlk wm-shine"/><path class="emha3wbqe wm-k"/><path class="vxrha6-ej wm-s"/><path class="blawizb7e"/><path class="evjjbybyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-check"} {...others} />);
}

export default Component;
