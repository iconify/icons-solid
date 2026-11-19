import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8ikbmb0m.css';
import '../../css/j/j5x25ac_m.css';
import '../../css/a/a-x6jfb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i8ikbmb0m"/><path class="j5x25ac_m"/><path class="a-x6jfb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:aspect-ratio-1-85-1"} {...others} />);
}

export default Component;
