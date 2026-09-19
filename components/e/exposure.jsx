import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v-_n44b3k.css';
import '../../css/l/lssfhfaij.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="v-_n44b3k"/><path class="lssfhfaij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:exposure"} {...others} />);
}

export default Component;
