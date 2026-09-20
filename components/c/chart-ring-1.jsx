import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olt90gbii.css';
import '../../css/m/mkb_cm8ba.css';
import '../../css/n/ngupifb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="olt90gbii"/><path class="mkb_cm8ba"/><path class="ngupifb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-ring-1"} {...others} />);
}

export default Component;
