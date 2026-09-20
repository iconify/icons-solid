import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7pbq7ble.css';
import '../../css/u/uu_ohjbuk.css';
import '../../css/q/qe4vl5bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e7pbq7ble"/><path class="uu_ohjbuk"/><path class="qe4vl5bmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:road-straight"} {...others} />);
}

export default Component;
