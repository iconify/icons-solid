import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lh2s7ebjn.css';
import '../../css/s/saewjvbbt.css';
import '../../css/g/gp6osvw5g.css';
import '../../css/b/bbbyugbea.css';
import '../../css/j/jge9n2g_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lh2s7ebjn wm-shadow"/><path class="saewjvbbt wm-shadow"/><path class="gp6osvw5g"/><path class="bbbyugbea"/><path class="jge9n2g_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:camera"} {...others} />);
}

export default Component;
