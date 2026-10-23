import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz7v36brj.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/s/sb3_i4b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uz7v36brj"/><path class="c_9t11wpq"/><path class="sb3_i4b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stairs-up"} {...others} />);
}

export default Component;
