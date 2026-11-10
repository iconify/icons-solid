import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/x/x7gky6bto.css';
import '../../css/q/q4ow7x1ja.css';
import '../../css/a/ak5a0ziex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="x7gky6bto"/><path class="q4ow7x1ja"/><path class="ak5a0ziex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:analytics-increase"} {...others} />);
}

export default Component;
