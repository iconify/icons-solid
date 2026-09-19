import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/up_-v1y1l.css';
import '../../css/f/fqrai17us.css';
import '../../css/u/uvrux27rf.css';
import '../../css/j/jg57b9duv.css';
import '../../css/q/qibnc_b8o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="up_-v1y1l"/><path clip-rule="evenodd" class="fqrai17us"/><path class="uvrux27rf"/><path class="jg57b9duv"/><path class="qibnc_b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-standing"} {...others} />);
}

export default Component;
