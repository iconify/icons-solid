import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smgzgcbpq.css';
import '../../css/j/jt1js_paa.css';
import '../../css/s/sk8-i7dpz.css';
import '../../css/j/js6g9scdr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="smgzgcbpq"/><path class="jt1js_paa"/><path clip-rule="evenodd" class="sk8-i7dpz"/><path class="js6g9scdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:quote-bold"} {...others} />);
}

export default Component;
