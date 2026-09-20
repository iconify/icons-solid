import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x0fuh28ql.css';
import '../../css/r/r8oc3ubxa.css';
import '../../css/z/ze8g9pbfl.css';
import '../../css/b/bia4v_qno.css';
import '../../css/r/r1zr_yb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x0fuh28ql"/><path class="r8oc3ubxa"/><path class="ze8g9pbfl"/><circle transform="rotate(-30 18.665 4.768)" class="bia4v_qno"/><ellipse transform="rotate(-30 18.665 4.768)" class="r1zr_yb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-4-linear"} {...others} />);
}

export default Component;
