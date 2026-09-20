import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mevpcjxyu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wqstwcb6o.css';
import '../../css/l/lkb91jb1n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mevpcjxyu"/><g class="ij2x_72vy"><path class="wqstwcb6o"/><path class="lkb91jb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:check-box-with-check"} {...others} />);
}

export default Component;
