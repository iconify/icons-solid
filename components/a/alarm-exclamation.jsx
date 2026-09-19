import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xp18cdb9s.css';
import '../../css/w/wdgx_ps5k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xp18cdb9s"/><path class="wdgx_ps5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-exclamation"} {...others} />);
}

export default Component;
