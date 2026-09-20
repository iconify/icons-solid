import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i37ka9tjc.css';
import '../../css/k/k73-1jbuh.css';
import '../../css/n/ndlin6u7h.css';
import '../../css/p/pyr6cp7bq.css';
import '../../css/k/kqq9z3b7v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i37ka9tjc"/><path class="k73-1jbuh"/><path class="ndlin6u7h"/><path class="pyr6cp7bq"/><path class="kqq9z3b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-list-9"} {...others} />);
}

export default Component;
