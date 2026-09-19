import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l18wyihen.css';
import '../../css/r/rajzm5ujv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="l18wyihen"/><path class="rajzm5ujv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ampersand-2"} {...others} />);
}

export default Component;
