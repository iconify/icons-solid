import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/es7yjkb-n.css';
import '../../css/t/tirjqob-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="es7yjkb-n"/><path class="tirjqob-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:bell-check"} {...others} />);
}

export default Component;
