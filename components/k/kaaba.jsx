import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/o/odbsaxbsp.css';
import '../../css/x/xv_6eldam.css';
import '../../css/g/gfrbq3b9a.css';
import '../../css/n/ncwmm7bqk.css';
import '../../css/q/qz0lbabta.css';
import '../../css/t/tvzol081h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/d12ldob9a.css';
import '../../css/o/oczpjbnec.css';
import '../../css/q/qd39kybym.css';
import '../../css/h/hnyu6gbmu.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="odbsaxbsp"/><path class="xv_6eldam"/><path class="gfrbq3b9a"/><path class="ncwmm7bqk"/><circle class="qz0lbabta"/><circle class="tvzol081h"/></g><g class="ij2x_72vy"><path class="d12ldob9a"/><path class="oczpjbnec"/><circle class="qd39kybym"/><circle class="hnyu6gbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kaaba"} {...others} />);
}

export default Component;
