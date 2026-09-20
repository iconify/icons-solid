import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lw8h482ew.css';
import '../../css/b/bf5-e4bot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lw8h482ew"/><path class="bf5-e4bot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-right-down"} {...others} />);
}

export default Component;
