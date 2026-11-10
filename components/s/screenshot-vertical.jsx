import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fg7wbkb5q.css';
import '../../css/r/r_fy1_94q.css';
import '../../css/o/oa0nqmblr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fg7wbkb5q"/><path class="r_fy1_94q"/><path class="oa0nqmblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screenshot-vertical"} {...others} />);
}

export default Component;
