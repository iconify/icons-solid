import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z_tt50bhn.css';
import '../../css/h/hgyxkqn8m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="z_tt50bhn"/><path class="hgyxkqn8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:ai-chip-robot"} {...others} />);
}

export default Component;
