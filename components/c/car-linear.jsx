import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tq4bgqb7i.css';
import '../../css/m/m8spuibnh.css';
import '../../css/t/tf5n4ib8z.css';
import '../../css/x/xbpaam-ee.css';
import '../../css/k/kjdqdibrw.css';
import '../../css/g/g-t4_esiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tq4bgqb7i"/><path class="m8spuibnh"/><path class="tf5n4ib8z"/><path class="xbpaam-ee"/><path class="kjdqdibrw"/><path class="g-t4_esiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-linear"} {...others} />);
}

export default Component;
