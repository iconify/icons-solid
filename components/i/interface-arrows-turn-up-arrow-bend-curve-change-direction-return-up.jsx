import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c3kbvfgxt.css';
import '../../css/q/qjp9ozb5m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="c3kbvfgxt"/><path class="qjp9ozb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-turn-up-arrow-bend-curve-change-direction-return-up"} {...others} />);
}

export default Component;
