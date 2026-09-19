import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t3kqcbgbr.css';
import '../../css/i/i834uqbpb.css';
import '../../css/c/c3p-kidqt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="t3kqcbgbr"/><path class="i834uqbpb"/><path class="c3p-kidqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bandage-1"} {...others} />);
}

export default Component;
