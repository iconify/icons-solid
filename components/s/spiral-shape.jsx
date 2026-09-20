import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i61-5eu8p.css';
import '../../css/a/a02_28-jy.css';
import '../../css/f/fihkqhbur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="i61-5eu8p"/><path class="a02_28-jy"/><path class="fihkqhbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:spiral-shape"} {...others} />);
}

export default Component;
