import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/irqzpqdrr.css';
import '../../css/m/mp0ebab0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="irqzpqdrr"/><path class="mp0ebab0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:home-hospital"} {...others} />);
}

export default Component;
