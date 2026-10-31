import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ei8g9bc3n.css';
import '../../css/g/gs9k1ghcu.css';
import '../../css/k/kipcp4bhv.css';
import '../../css/g/g25vtgbhi.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ei8g9bc3n wm-shadow"/><path class="gs9k1ghcu wm-shadow"/><path class="kipcp4bhv"/><path class="g25vtgbhi"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bell-off"} {...others} />);
}

export default Component;
