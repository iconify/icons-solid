import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uzm0g-iik.css';
import '../../css/i/i4-2sobpg.css';
import '../../css/m/mmjn42wmi.css';
import '../../css/s/sx801qq3j.css';
import '../../css/t/tb51pkbjl.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uzm0g-iik"/><path class="i4-2sobpg"/><path class="mmjn42wmi"/><path class="sx801qq3j"/><path class="tb51pkbjl"/><circle class="gp0egaclj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brain-cog"} {...others} />);
}

export default Component;
