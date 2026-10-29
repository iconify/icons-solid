import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r_vmnlbqt.css';
import '../../css/x/x_dosubkr.css';
import '../../css/t/tmugyk0ur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="r_vmnlbqt"/><path class="wm-a x_dosubkr"/><path class="tmugyk0ur wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunrise-solid"} {...others} />);
}

export default Component;
