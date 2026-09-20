import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_rouaal.css';
import '../../css/z/zew7_nihr.css';
import '../../css/e/e2x7ky6ia.css';
import '../../css/c/c2w7g9ycw.css';
import '../../css/p/phftf4bom.css';
import '../../css/j/j44hwkbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ja_rouaal"/><path class="zew7_nihr"/><path class="e2x7ky6ia"/><path class="c2w7g9ycw"/><path class="phftf4bom"/><path class="j44hwkbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-square-bold-duotone"} {...others} />);
}

export default Component;
