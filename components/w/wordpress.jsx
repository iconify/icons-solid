import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgdf6zbmt.css';
import '../../css/n/njbahgb8g.css';
import '../../css/m/miebfcbzn.css';
import '../../css/l/lb13mabta.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="pgdf6zbmt"/><path class="njbahgb8g"/><path class="miebfcbzn"/><path class="lb13mabta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:wordpress"} {...others} />);
}

export default Component;
