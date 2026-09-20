import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/msllribff.css';
import '../../css/h/hdx03h9ay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="msllribff"/><path class="hdx03h9ay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microphone2"} {...others} />);
}

export default Component;
