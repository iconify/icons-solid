import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fo6abg74g.css';
import '../../css/u/um2lrkbcl.css';
import '../../css/e/eszr3ewht.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="fo6abg74g"/><path clip-rule="evenodd" class="um2lrkbcl"/><path class="eszr3ewht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shoe-print-bold"} {...others} />);
}

export default Component;
