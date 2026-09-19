import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-8ecobzw.css';
import '../../css/u/uiiwwqu8p.css';
import '../../css/i/i5d91fvbx.css';
import '../../css/b/bs2-qkmiq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d-8ecobzw"/><rect class="uiiwwqu8p"/><path clip-rule="evenodd" class="i5d91fvbx"/><path class="bs2-qkmiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:images-1"} {...others} />);
}

export default Component;
