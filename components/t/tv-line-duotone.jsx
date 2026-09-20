import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j3mxzlont.css';
import '../../css/m/mjj4-z-4p.css';
import '../../css/h/hxmvn4bez.css';
import '../../css/m/mi1n120me.css';
import '../../css/k/km54nzbze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j3mxzlont"/><path class="mjj4-z-4p"/><path class="hxmvn4bez"/><path class="mi1n120me"/><path class="km54nzbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tv-line-duotone"} {...others} />);
}

export default Component;
