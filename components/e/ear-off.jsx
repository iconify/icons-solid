import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8yxm9erq.css';
import '../../css/j/jrn5fu1lp.css';
import '../../css/i/i7l2k5bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v8yxm9erq"/><path class="jrn5fu1lp"/><path class="i7l2k5bwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ear-off"} {...others} />);
}

export default Component;
