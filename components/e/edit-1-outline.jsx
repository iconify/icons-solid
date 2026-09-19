import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnv9k0b4h.css';
import '../../css/f/f-nyznb-r.css';
import '../../css/r/ra84clbag.css';
import '../../css/e/etuyxo_3g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vnv9k0b4h"/><path class="f-nyznb-r"/><path clip-rule="evenodd" class="ra84clbag"/><path class="etuyxo_3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:edit-1-outline"} {...others} />);
}

export default Component;
