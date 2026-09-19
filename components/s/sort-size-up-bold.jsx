import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayoxdyb-f.css';
import '../../css/e/ema3ful7z.css';
import '../../css/h/ho6qf8bec.css';
import '../../css/h/h_5qr0bya.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="ayoxdyb-f"/><path class="ema3ful7z"/><rect class="ho6qf8bec"/><rect class="h_5qr0bya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-size-up-bold"} {...others} />);
}

export default Component;
