import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qe8lp6bwu.css';
import '../../css/o/oy5uj2_to.css';
import '../../css/i/ifu072bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qe8lp6bwu"/><path class="oy5uj2_to"/><path class="ifu072bhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chalkboard-user"} {...others} />);
}

export default Component;
