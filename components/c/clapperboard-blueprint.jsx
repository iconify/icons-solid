import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tpx8s4b7z.css';
import '../../css/z/zevicpjgz.css';
import '../../css/t/to5bdybou.css';
import '../../css/k/kuknt1bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tpx8s4b7z wm-deco"/><path class="wm-deco zevicpjgz"/><path class="to5bdybou"/><path class="kuknt1bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clapperboard-blueprint"} {...others} />);
}

export default Component;
