import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3i3g4b5r.css';
import '../../css/f/furvl8ujh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c3i3g4b5r"/><path class="furvl8ujh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-03"} {...others} />);
}

export default Component;
