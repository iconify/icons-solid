import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6h_6rb8h.css';
import '../../css/e/erb7lybqj.css';
import '../../css/g/gak2ke3nx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c6h_6rb8h"/><path clip-rule="evenodd" class="erb7lybqj"/><path class="gak2ke3nx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:h-4-outline"} {...others} />);
}

export default Component;
