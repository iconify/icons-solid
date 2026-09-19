import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ezn9tccvl.css';
import '../../css/y/y3q1vrbgr.css';
import '../../css/t/tqjl8kbws.css';
import '../../css/o/o1w_a7bsq.css';
import '../../css/u/uh460ybdf.css';
import '../../css/v/vezcezvfx.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ezn9tccvl"/><path class="y3q1vrbgr"/><path class="tqjl8kbws"/><path class="o1w_a7bsq"/><path class="uh460ybdf"/><path class="vezcezvfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:speaker-outline"} {...others} />);
}

export default Component;
