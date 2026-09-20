import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tirjqob-n.css';
import '../../css/u/u51o03bjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tirjqob-n"/><path class="u51o03bjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:bell-home"} {...others} />);
}

export default Component;
