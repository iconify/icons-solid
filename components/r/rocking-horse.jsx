import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wx38zib9k.css';
import '../../css/q/q0mhllb1k.css';
import '../../css/p/pub4l-79m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wx38zib9k"/><path class="q0mhllb1k"/><path class="pub4l-79m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rocking-horse"} {...others} />);
}

export default Component;
