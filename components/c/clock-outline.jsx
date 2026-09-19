import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0x940b_f.css';
import '../../css/d/dvs0a804m.css';
import '../../css/x/x08ha_bbm.css';
import '../../css/r/rm3morbuu.css';
import '../../css/b/b0x4tjk5w.css';
import '../../css/x/x39mpl37j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t0x940b_f"/><path class="dvs0a804m"/><path clip-rule="evenodd" class="x08ha_bbm"/><path clip-rule="evenodd" class="rm3morbuu"/><path class="b0x4tjk5w"/><path clip-rule="evenodd" class="x39mpl37j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock-outline"} {...others} />);
}

export default Component;
