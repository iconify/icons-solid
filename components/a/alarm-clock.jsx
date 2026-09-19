import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/esofr1bdp.css';
import '../../css/x/xza4_mlzs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="esofr1bdp"/><path class="xza4_mlzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-clock"} {...others} />);
}

export default Component;
