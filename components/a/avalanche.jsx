import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-kt5ccsq.css';
import '../../css/e/e0sxabbow.css';
import '../../css/w/wt-mvwbaj.css';
import '../../css/d/dqn9o-b1a.css';
import '../../css/l/ljs-z45sx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u-kt5ccsq"/><path class="e0sxabbow"/><path class="wt-mvwbaj"/><path class="dqn9o-b1a"/><path class="ljs-z45sx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:avalanche"} {...others} />);
}

export default Component;
