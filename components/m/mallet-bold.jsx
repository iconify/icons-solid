import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gd15vvxnd.css';
import '../../css/b/bv5ns8bfe.css';
import '../../css/n/nwa7odbuf.css';
import '../../css/d/dtoswibar.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gd15vvxnd"/><path class="bv5ns8bfe"/><path clip-rule="evenodd" class="nwa7odbuf"/><path class="dtoswibar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mallet-bold"} {...others} />);
}

export default Component;
