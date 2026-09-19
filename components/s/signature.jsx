import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ce4bvgyxx.css';
import '../../css/a/a6lp9bcmf.css';
import '../../css/z/zwidvqbuw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ce4bvgyxx"/><path class="a6lp9bcmf"/><path class="zwidvqbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signature"} {...others} />);
}

export default Component;
