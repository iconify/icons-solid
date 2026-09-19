import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mwjrioeuw.css';
import '../../css/g/gmsb27a7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mwjrioeuw"/><path class="gmsb27a7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dna"} {...others} />);
}

export default Component;
