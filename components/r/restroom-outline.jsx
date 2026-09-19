import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du4dvacfx.css';
import '../../css/f/fqa3jbcqm.css';
import '../../css/i/inb63kbmf.css';
import '../../css/y/yrgyvcccs.css';
import '../../css/j/jpy96abvt.css';
import '../../css/p/pqmerzggs.css';
import '../../css/f/f4fb8kbdk.css';
import '../../css/x/xy46-ibkg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="du4dvacfx"/><path class="fqa3jbcqm"/><path clip-rule="evenodd" class="inb63kbmf"/><path clip-rule="evenodd" class="yrgyvcccs"/><path clip-rule="evenodd" class="jpy96abvt"/><path class="pqmerzggs"/><path clip-rule="evenodd" class="f4fb8kbdk"/><path clip-rule="evenodd" class="xy46-ibkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:restroom-outline"} {...others} />);
}

export default Component;
