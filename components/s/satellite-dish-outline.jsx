import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_zhcobuf.css';
import '../../css/i/i1irgdm2u.css';
import '../../css/g/ga7-lizjt.css';
import '../../css/j/jdzyz-dgz.css';
import '../../css/g/g5eaimb5h.css';
import '../../css/m/mlwi5fbim.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="u_zhcobuf"/><path class="i1irgdm2u"/><path clip-rule="evenodd" class="ga7-lizjt"/><path class="jdzyz-dgz"/><path class="g5eaimb5h"/><path clip-rule="evenodd" class="mlwi5fbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:satellite-dish-outline"} {...others} />);
}

export default Component;
