import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxyv9z9mh.css';
import '../../css/d/d1kwzebva.css';
import '../../css/t/tx91xabyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="yxyv9z9mh"><path class="d1kwzebva"/><path class="tx91xabyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:timer0-1"} {...others} />);
}

export default Component;
