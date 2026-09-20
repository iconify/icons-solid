import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8sa73bej.css';
import '../../css/j/jmm8-fblo.css';
import '../../css/r/r4geg090s.css';
import '../../css/g/g_z8lvgro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v8sa73bej"/><path class="jmm8-fblo"/><path class="r4geg090s"/><path class="g_z8lvgro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:security-gdpr-browser"} {...others} />);
}

export default Component;
