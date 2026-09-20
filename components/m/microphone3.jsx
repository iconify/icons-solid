import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ny779fbje.css';
import '../../css/r/rlvidybyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ny779fbje"/><path class="rlvidybyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microphone3"} {...others} />);
}

export default Component;
