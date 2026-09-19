import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dhtouukmn.css';
import '../../css/h/h1imwhs5j.css';
import '../../css/k/k1i6v8min.css';
import '../../css/s/sjl6j_bve.css';
import '../../css/t/tci3qvbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dhtouukmn"/><path class="h1imwhs5j"/><path class="k1i6v8min"/><path class="sjl6j_bve"/><path class="tci3qvbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arcade"} {...others} />);
}

export default Component;
