import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2r6jz7gt.css';
import '../../css/u/uto4wj_to.css';
import '../../css/m/mptz6qyat.css';
import '../../css/h/hqxu0ccaz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y2r6jz7gt"/><path class="uto4wj_to"/><path class="mptz6qyat"/><path class="hqxu0ccaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:airport-plane-transit"} {...others} />);
}

export default Component;
