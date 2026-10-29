import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v-bnvbjhd.css';
import '../../css/a/au-pabgjr.css';
import '../../css/n/nge5cfbll.css';
import '../../css/k/kz4hppbys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v-bnvbjhd wm-deco"/><path class="au-pabgjr wm-deco"/><path class="nge5cfbll wm-deco"/><path class="kz4hppbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:armchair-blueprint"} {...others} />);
}

export default Component;
