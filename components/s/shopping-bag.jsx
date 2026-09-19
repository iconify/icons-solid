import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/i_t9tw1uj.css';
import '../../css/o/o92l4abnk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="i_t9tw1uj"/><path class="o92l4abnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shopping-bag"} {...others} />);
}

export default Component;
