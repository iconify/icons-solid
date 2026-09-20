import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3hohrr9d.css';
import '../../css/s/s8owq2bdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="t3hohrr9d"/><path class="s8owq2bdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microphone"} {...others} />);
}

export default Component;
