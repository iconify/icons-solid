import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aqktcte9c.css';
import '../../css/c/chhce3xjq.css';
import '../../css/f/f3-vaob1e.css';
import '../../css/c/c_mg5e-9y.css';
import '../../css/e/ewv3wqqzm.css';
import '../../css/g/gl088abkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="aqktcte9c wm-shadow"/><path class="chhce3xjq"/><path class="f3-vaob1e"/><path class="c_mg5e-9y"/><path class="ewv3wqqzm"/><path class="gl088abkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shirt"} {...others} />);
}

export default Component;
