import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/njfq1c6iw.css';
import '../../css/e/et9k69bbo.css';
import '../../css/w/whaw6nc4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="njfq1c6iw"/><path class="et9k69bbo"/><path class="whaw6nc4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-minimalistic-linear"} {...others} />);
}

export default Component;
