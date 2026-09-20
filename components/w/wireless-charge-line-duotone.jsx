import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rtrl0bc1m.css';
import '../../css/o/on8zzebxx.css';
import '../../css/a/a_i48oy3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rtrl0bc1m"/><path class="on8zzebxx"/><path class="a_i48oy3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wireless-charge-line-duotone"} {...others} />);
}

export default Component;
