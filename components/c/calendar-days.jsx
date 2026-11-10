import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owgl7ub8k.css';
import '../../css/i/ifyq64ofy.css';
import '../../css/x/x4ihxui-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="owgl7ub8k"/><path class="ifyq64ofy"/><path class="x4ihxui-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-days"} {...others} />);
}

export default Component;
