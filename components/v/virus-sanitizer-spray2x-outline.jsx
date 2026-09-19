import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oiz0jrbek.css';
import '../../css/b/b2evgybnf.css';
import '../../css/u/uxcp4yfkp.css';
import '../../css/z/z23feqc8q.css';
import '../../css/q/qmzhmtbqy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oiz0jrbek"/><path class="b2evgybnf"/><path class="uxcp4yfkp"/><path clip-rule="evenodd" class="z23feqc8q"/><path class="qmzhmtbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:virus-sanitizer-spray2x-outline"} {...others} />);
}

export default Component;
