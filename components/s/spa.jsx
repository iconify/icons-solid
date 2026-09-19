import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nkv115b_c.css';
import '../../css/h/hogzoqbfn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="nkv115b_c"/><path class="hogzoqbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:spa"} {...others} />);
}

export default Component;
