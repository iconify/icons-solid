import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1f44fbrc.css';
import '../../css/g/g64u9bapr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y1f44fbrc"/><path class="g64u9bapr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:microphone-mute"} {...others} />);
}

export default Component;
