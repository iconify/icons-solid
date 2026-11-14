import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w99w8acpr.css';
import '../../css/f/fn6wy8ujq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w99w8acpr"/><path class="fn6wy8ujq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-shield"} {...others} />);
}

export default Component;
