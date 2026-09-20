import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2nzvx1us.css';
import '../../css/s/s_plwmgtd.css';
import '../../css/q/qzzhnccem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b2nzvx1us"/><path class="s_plwmgtd"/><path class="qzzhnccem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:view-binocular"} {...others} />);
}

export default Component;
