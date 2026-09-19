import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hb0vw1bvi.css';
import '../../css/g/gzhz0wbkj.css';
import '../../css/m/mofc-ww5x.css';
import '../../css/w/w9x2wpv7m.css';
import '../../css/w/w4-_cxpts.css';
import '../../css/j/jnw9_o4gy.css';
import '../../css/n/nzunz9b9o.css';
import '../../css/k/kgaczpded.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hb0vw1bvi"/><path clip-rule="evenodd" class="gzhz0wbkj"/><path class="mofc-ww5x"/><path clip-rule="evenodd" class="w9x2wpv7m"/><path class="w4-_cxpts"/><path clip-rule="evenodd" class="jnw9_o4gy"/><path class="nzunz9b9o"/><path clip-rule="evenodd" class="kgaczpded"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:barcode-read-outline"} {...others} />);
}

export default Component;
