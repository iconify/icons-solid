import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/njf5snbwf.css';
import '../../css/t/tfgra3ble.css';
import '../../css/w/w4m4eeb0m.css';
import '../../css/f/fd7_frbmd.css';
import '../../css/b/b8muav1zi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="njf5snbwf"/><path class="tfgra3ble"/><path class="w4m4eeb0m"/><path class="fd7_frbmd"/><path class="b8muav1zi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mug-line-duotone"} {...others} />);
}

export default Component;
