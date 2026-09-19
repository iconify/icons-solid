import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bba6s1bkv.css';
import '../../css/j/jfns5ihsk.css';
import '../../css/w/w-klkw3bj.css';
import '../../css/r/rn6_kx1aa.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bba6s1bkv"/><path class="jfns5ihsk"/><path class="w-klkw3bj"/><path class="rn6_kx1aa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:playback-speed-duo"} {...others} />);
}

export default Component;
