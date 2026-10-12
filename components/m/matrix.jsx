import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lk95xk_xe.css';
import '../../css/f/flicwibwu.css';
import '../../css/v/va1l46f4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.21 21.29)" class="lk95xk_xe"/><path class="flicwibwu"/><path class="va1l46f4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:matrix"} {...others} />);
}

export default Component;
