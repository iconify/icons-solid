import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/i/ilwnqgbrm.css';
import '../../css/l/l4y61svhu.css';
import '../../css/a/a2_bt0bia.css';
import '../../css/l/l5gr8x1yh.css';
import '../../css/c/caxq9wb2w.css';
import '../../css/c/cvucmfbbm.css';
import '../../css/h/hp9sv0bmn.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGvkVIAbPV" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="ilwnqgbrm"/></linearGradient></defs><rect transform="matrix(2 1.4 -1.4 2 256 340)" class="l4y61svhu"/><rect transform="matrix(2 -1.4 1.4 2 256 340)" class="l4y61svhu"/><g transform="matrix(1.8 0 0 1.8 76 16)"><path fill="url(#SVGvkVIAbPV)" class="a2_bt0bia"/><ellipse class="l5gr8x1yh"/><ellipse class="caxq9wb2w"/><path class="cvucmfbbm"/><path class="hp9sv0bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:skull-and-crossbones"} {...others} />);
}

export default Component;
