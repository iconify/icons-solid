import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y91vy_b2j.css';
import '../../css/g/glnof6bxe.css';
import '../../css/j/juq3_jbfg.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="y91vy_b2j"/><path class="glnof6bxe"/><path class="juq3_jbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bf"} {...others} />);
}

export default Component;
