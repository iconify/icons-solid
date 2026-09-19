import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocgohyb-o.css';
import '../../css/g/gb8be6bqv.css';
import '../../css/h/h6-myqjhn.css';
import '../../css/f/fdoz4zhkc.css';
import '../../css/f/fasp-rvct.css';
import '../../css/d/d2j4ksbib.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ocgohyb-o"/><path class="gb8be6bqv"/><path class="h6-myqjhn"/><path class="fdoz4zhkc"/><path class="fasp-rvct"/><path class="d2j4ksbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rabbit-face"} {...others} />);
}

export default Component;
