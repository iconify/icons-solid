import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx4bavb6w.css';
import '../../css/h/h6wj0rbma.css';
import '../../css/u/u1l4v_kww.css';
import '../../css/w/w8nm51hzv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dx4bavb6w"/><path class="h6wj0rbma"/><path class="u1l4v_kww"/><path class="w8nm51hzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shopping-bags"} {...others} />);
}

export default Component;
