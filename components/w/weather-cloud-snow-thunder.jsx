import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyyoob9xn.css';
import '../../css/f/fotr6ck_d.css';
import '../../css/w/wqs1nebxz.css';
import '../../css/v/vb5wvtbil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gyyoob9xn"/><path class="fotr6ck_d"/><path class="wqs1nebxz"/><path class="vb5wvtbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:weather-cloud-snow-thunder"} {...others} />);
}

export default Component;
