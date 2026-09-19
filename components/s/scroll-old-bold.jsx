import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ax93e4b8f.css';
import '../../css/h/hwh1d8zit.css';
import '../../css/a/aj56w3bcr.css';
import '../../css/o/ozawm9b2q.css';
import '../../css/f/fey04gbtg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ax93e4b8f"/><path class="hwh1d8zit"/><path class="aj56w3bcr"/><path clip-rule="evenodd" class="ozawm9b2q"/><path class="fey04gbtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scroll-old-bold"} {...others} />);
}

export default Component;
