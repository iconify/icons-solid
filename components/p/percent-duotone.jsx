import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clnmdacqy.css';
import '../../css/w/wy_dkvg4c.css';
import '../../css/d/d_i7zccah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="clnmdacqy"/><path class="wy_dkvg4c"/><path class="d_i7zccah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:percent-duotone"} {...others} />);
}

export default Component;
