import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oom210bsn.css';
import '../../css/m/m9kbinsgl.css';
import '../../css/y/yvmgt3rgc.css';
import '../../css/c/c148ybb0y.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="oom210bsn"/><path class="m9kbinsgl"/><path class="yvmgt3rgc"/><path class="c148ybb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lips-outline"} {...others} />);
}

export default Component;
