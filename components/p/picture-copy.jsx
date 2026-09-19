import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k52h7evjr.css';
import '../../css/u/u73h1tb4c.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="n1lsf0bnc"><path class="k52h7evjr"/><path class="u73h1tb4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:picture-copy"} {...others} />);
}

export default Component;
