import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/j/j-6uorbyc.css';
import '../../css/h/hhevh8b9t.css';
import '../../css/i/ig7og-50b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="j-6uorbyc"/><path class="hhevh8b9t"/><path class="ig7og-50b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warning-square"} {...others} />);
}

export default Component;
