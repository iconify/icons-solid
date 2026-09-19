import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/a/avjihxmjk.css';
import '../../css/o/o7bmhpdyu.css';
import '../../css/g/g9o9b0bkw.css';
import '../../css/y/y5re3sb7v.css';
import '../../css/k/kkyffv98b.css';
import '../../css/f/f5b618btg.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="avjihxmjk"/><path class="o7bmhpdyu"/><path class="g9o9b0bkw"/></g><path class="y5re3sb7v"/><path class="kkyffv98b"/><path class="f5b618btg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-down-left-print"} {...others} />);
}

export default Component;
