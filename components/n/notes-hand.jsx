import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq1w0qk4y.css';
import '../../css/k/kd_ez4bpa.css';
import '../../css/n/n-iytcb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iq1w0qk4y"/><path class="kd_ez4bpa"/><path class="n-iytcb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:notes-hand"} {...others} />);
}

export default Component;
