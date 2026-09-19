import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijhlcccnk.css';
import '../../css/i/irnrs2b6w.css';
import '../../css/l/l4qf8vk5b.css';
import '../../css/i/i8z0nqruo.css';
import '../../css/z/z-onjebwx.css';
import '../../css/p/peejenwcc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ijhlcccnk"/><path clip-rule="evenodd" class="irnrs2b6w"/><path clip-rule="evenodd" class="l4qf8vk5b"/><path class="i8z0nqruo"/><path clip-rule="evenodd" class="z-onjebwx"/><path clip-rule="evenodd" class="peejenwcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rolling-eyes-outline"} {...others} />);
}

export default Component;
