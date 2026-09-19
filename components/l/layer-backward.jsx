import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u8_ot7bnm.css';
import '../../css/b/b7u9enlhv.css';
import '../../css/c/c6-vowhzn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="u8_ot7bnm"/><path class="b7u9enlhv"/><path class="c6-vowhzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-backward"} {...others} />);
}

export default Component;
