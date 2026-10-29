import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vikq7_blh.css';
import '../../css/f/f4wn345na.css';
import '../../css/f/fq34ly3dk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vikq7_blh"/><path class="f4wn345na wm-a"/><path class="fq34ly3dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gauge-duo"} {...others} />);
}

export default Component;
