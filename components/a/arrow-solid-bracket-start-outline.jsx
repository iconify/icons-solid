import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2f8kf2sn.css';
import '../../css/k/k9e6wv89t.css';
import '../../css/u/usukl4bow.css';
import '../../css/j/jzvhfpbzx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s2f8kf2sn"/><path class="k9e6wv89t"/><path clip-rule="evenodd" class="usukl4bow"/><path class="jzvhfpbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-bracket-start-outline"} {...others} />);
}

export default Component;
