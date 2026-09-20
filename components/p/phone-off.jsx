import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b78hd_rlk.css';
import '../../css/r/rn9fw-2lr.css';
import '../../css/y/yc2_9cb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b78hd_rlk"/><path class="rn9fw-2lr"/><path class="yc2_9cb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:phone-off"} {...others} />);
}

export default Component;
