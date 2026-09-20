import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vgtevxfne.css';
import '../../css/i/iegfmtn_l.css';
import '../../css/u/uzo4fr6vt.css';
import '../../css/u/uni717hwd.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="vgtevxfne"/><path class="iegfmtn_l"/><path class="uzo4fr6vt"/><path class="uni717hwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bike-2"} {...others} />);
}

export default Component;
