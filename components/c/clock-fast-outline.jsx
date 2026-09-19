import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihjjzqbmv.css';
import '../../css/g/genqd_b4v.css';
import '../../css/l/l9-rks3yu.css';
import '../../css/s/s5w1uzlwi.css';
import '../../css/g/ghpw9iy0v.css';
import '../../css/p/p-9u5ouvy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ihjjzqbmv"/><path clip-rule="evenodd" class="genqd_b4v"/><path class="l9-rks3yu"/><path clip-rule="evenodd" class="s5w1uzlwi"/><path clip-rule="evenodd" class="ghpw9iy0v"/><path class="p-9u5ouvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock-fast-outline"} {...others} />);
}

export default Component;
