import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i2d57tb6e.css';
import '../../css/i/il-3wuczg.css';
import '../../css/i/iydgav8kp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="i2d57tb6e"/><path class="il-3wuczg"/><path class="iydgav8kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:portrait-lock"} {...others} />);
}

export default Component;
