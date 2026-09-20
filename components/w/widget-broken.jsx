import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cgf24obqk.css';
import '../../css/s/snwtwpbek.css';
import '../../css/l/lk2buz33l.css';
import '../../css/v/v382p5edm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cgf24obqk"/><path class="snwtwpbek"/><path class="lk2buz33l"/><path class="v382p5edm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-broken"} {...others} />);
}

export default Component;
