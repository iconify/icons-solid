import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgsf0f4kg.css';
import '../../css/b/b60xnhcqr.css';
import '../../css/n/ncm95bc2w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mgsf0f4kg"/><path class="b60xnhcqr"/><path class="ncm95bc2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-squint-tears-duo"} {...others} />);
}

export default Component;
