import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h-h-argoo.css';
import '../../css/q/qgxak08we.css';
import '../../css/r/r7i5pw7pz.css';
import '../../css/m/m5-wz0b2q.css';
import '../../css/x/x3ahtubtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h-h-argoo"/><path class="qgxak08we"/><path class="r7i5pw7pz"/><path class="m5-wz0b2q"/><path class="x3ahtubtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-broken"} {...others} />);
}

export default Component;
