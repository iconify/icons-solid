import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klcpl6box.css';
import '../../css/n/n4uixlouz.css';
import '../../css/h/hdg3ht41q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="klcpl6box"/><path class="n4uixlouz"/><path class="hdg3ht41q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:walkman-player"} {...others} />);
}

export default Component;
