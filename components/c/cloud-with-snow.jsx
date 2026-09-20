import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihurembfg.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/b/bepahm04n.css';
import '../../css/j/jimrxwnfm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ihurembfg"/><g class="doj9dq_jg"><path class="bepahm04n"/><path class="jimrxwnfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cloud-with-snow"} {...others} />);
}

export default Component;
