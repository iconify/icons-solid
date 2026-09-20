import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dt8o2lbya.css';
import '../../css/f/f1-y_phfi.css';
import '../../css/n/n4vsn25wb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dt8o2lbya"/><path class="f1-y_phfi"/><path class="n4vsn25wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:messages-people-person-bubble-square-2"} {...others} />);
}

export default Component;
