import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kr_lo_bwq.css';
import '../../css/x/xigqp5thb.css';
import '../../css/p/pjuugbv4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kr_lo_bwq"/><path class="xigqp5thb"/><path class="pjuugbv4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:retouch-saturation"} {...others} />);
}

export default Component;
