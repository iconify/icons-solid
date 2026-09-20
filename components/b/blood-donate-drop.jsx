import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enx-ktbog.css';
import '../../css/q/qgwz25bbx.css';
import '../../css/n/njdzg2mjv.css';
import '../../css/c/ciz6c2b4s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="enx-ktbog"/><path class="qgwz25bbx"/><path class="njdzg2mjv"/><path class="ciz6c2b4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:blood-donate-drop"} {...others} />);
}

export default Component;
