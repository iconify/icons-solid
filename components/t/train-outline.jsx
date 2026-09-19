import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pogviobod.css';
import '../../css/z/zy8ghtbyu.css';
import '../../css/g/gnmfys7zl.css';
import '../../css/f/fc5zd0b4n.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pogviobod"/><path class="zy8ghtbyu"/><path class="gnmfys7zl"/><path class="fc5zd0b4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:train-outline"} {...others} />);
}

export default Component;
