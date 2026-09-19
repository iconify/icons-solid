import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mfzmsjb1g.css';
import '../../css/e/ex1h1vkaf.css';
import '../../css/r/r_ijk8j7z.css';
import '../../css/q/qi1crib2m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="mfzmsjb1g"/><path class="ex1h1vkaf"/><path class="r_ijk8j7z"/><path class="qi1crib2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-expand-duo-bold"} {...others} />);
}

export default Component;
