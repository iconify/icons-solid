import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nr3xkyk0p.css';
import '../../css/q/qsdj6sedl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nr3xkyk0p"/><path class="qsdj6sedl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:repeat"} {...others} />);
}

export default Component;
