import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i2qwksboe.css';
import '../../css/s/s5akslbsm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="i2qwksboe"/><path class="s5akslbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:watch-fitness"} {...others} />);
}

export default Component;
