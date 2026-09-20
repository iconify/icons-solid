import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upg_mvemj.css';
import '../../css/s/sfy5rz71v.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vt2oo7o4z.css';
import '../../css/v/vdjc6_bwc.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="upg_mvemj"/><path class="sfy5rz71v"/><g class="jn8qy4bru"><path class="vt2oo7o4z"/><path class="vdjc6_bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mark"} {...others} />);
}

export default Component;
