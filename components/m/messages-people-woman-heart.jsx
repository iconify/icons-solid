import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxu79bcge.css';
import '../../css/r/r-0wki63m.css';
import '../../css/w/w_y1z4b0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wxu79bcge"/><path class="r-0wki63m"/><path class="w_y1z4b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:messages-people-woman-heart"} {...others} />);
}

export default Component;
