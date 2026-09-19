import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzh3nbban.css';
import '../../css/k/kg11nj89m.css';
import '../../css/l/l4qf8vk5b.css';
import '../../css/s/s5ognfy_z.css';
import '../../css/k/kiqr8zzyi.css';
import '../../css/p/peejenwcc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jzh3nbban"/><path class="kg11nj89m"/><path clip-rule="evenodd" class="l4qf8vk5b"/><path clip-rule="evenodd" class="s5ognfy_z"/><path class="kiqr8zzyi"/><path clip-rule="evenodd" class="peejenwcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:frown-open-outline"} {...others} />);
}

export default Component;
