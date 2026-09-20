import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vha-i9b3a.css';
import '../../css/e/et9k69bbo.css';
import '../../css/w/whaw6nc4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="vha-i9b3a"/><path class="et9k69bbo"/><path class="whaw6nc4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-minimalistic-broken"} {...others} />);
}

export default Component;
