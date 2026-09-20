import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgh_g4bgc.css';
import '../../css/e/e57n8cb9m.css';
import '../../css/j/j994ddc2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tgh_g4bgc"/><path class="e57n8cb9m"/><path class="j994ddc2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mobile-phone-vibration"} {...others} />);
}

export default Component;
