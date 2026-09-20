import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2awribkf.css';
import '../../css/q/q7zt7673w.css';
import '../../css/r/rjjyjz1xn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="y2awribkf"/><path class="q7zt7673w"/><path class="rjjyjz1xn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:lock-rotation"} {...others} />);
}

export default Component;
