import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lczcj9hky.css';
import '../../css/h/hyc1pwdsg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="lczcj9hky"/><path class="hyc1pwdsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-75"} {...others} />);
}

export default Component;
