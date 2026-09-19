import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rijwomp7z.css';
import '../../css/x/xn8-eabzo.css';
import '../../css/a/anodm08oq.css';
import '../../css/a/acnb4lb0v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rijwomp7z"/><path class="xn8-eabzo"/><path clip-rule="evenodd" class="anodm08oq"/><path class="acnb4lb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:brain"} {...others} />);
}

export default Component;
