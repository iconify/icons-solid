import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnk91y7oh.css';
import '../../css/l/lzqwbvb5e.css';
import '../../css/q/qoly2l_kl.css';
import '../../css/p/p9b9gbb7k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rnk91y7oh"/><path class="lzqwbvb5e"/><path class="qoly2l_kl"/><path class="p9b9gbb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cloudy-mostly-duo"} {...others} />);
}

export default Component;
