import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vjm1sqb8y.css';
import '../../css/s/s99bkf27r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vjm1sqb8y"/><path class="s99bkf27r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:high-speed-train-front"} {...others} />);
}

export default Component;
