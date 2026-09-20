import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w34osu__y.css';
import '../../css/m/mmbz02bgz.css';
import '../../css/a/akaq_eb1m.css';
import '../../css/b/b-kuwob2a.css';
import '../../css/c/cuk0mtl4o.css';
import '../../css/d/da4_evbph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="w34osu__y"><path class="mmbz02bgz"/><path class="akaq_eb1m"/><path class="b-kuwob2a"/><path class="cuk0mtl4o"/><path class="da4_evbph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:programming-touchscreen"} {...others} />);
}

export default Component;
