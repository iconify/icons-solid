import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztd6seb3o.css';
import '../../css/w/wni7cbbjl.css';
import '../../css/b/buhoe6w5z.css';
import '../../css/n/nrouxcbcz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ztd6seb3o"/><path clip-rule="evenodd" class="wni7cbbjl"/><path class="buhoe6w5z"/><path clip-rule="evenodd" class="nrouxcbcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:check-badge-outline"} {...others} />);
}

export default Component;
