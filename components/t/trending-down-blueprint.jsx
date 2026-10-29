import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rlnnxobai.css';
import '../../css/i/i2ddy7fru.css';
import '../../css/u/u3gfgccil.css';
import '../../css/w/w47x50q8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rlnnxobai wm-deco"/><path class="i2ddy7fru wm-deco"/><path class="u3gfgccil"/><path class="w47x50q8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trending-down-blueprint"} {...others} />);
}

export default Component;
