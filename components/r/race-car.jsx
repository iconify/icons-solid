import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3qiuzyym.css';
import '../../css/k/k65e6cbzd.css';
import '../../css/m/mu9py3vhm.css';
import '../../css/f/fmqakbb3j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b3qiuzyym"/><path clip-rule="evenodd" class="k65e6cbzd"/><path class="mu9py3vhm"/><path class="fmqakbb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:race-car"} {...others} />);
}

export default Component;
