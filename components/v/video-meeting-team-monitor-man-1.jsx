import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aupr5rbhp.css';
import '../../css/j/jkf3fdb5y.css';
import '../../css/o/obaa_5bei.css';
import '../../css/l/l4-53bcnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aupr5rbhp"/><path class="jkf3fdb5y"/><path class="obaa_5bei"/><path class="l4-53bcnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-meeting-team-monitor-man-1"} {...others} />);
}

export default Component;
