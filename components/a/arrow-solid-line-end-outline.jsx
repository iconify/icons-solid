import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkse_3btc.css';
import '../../css/m/mt2z4gbcg.css';
import '../../css/f/fb4sl08kb.css';
import '../../css/s/spenc4h9o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bkse_3btc"/><path clip-rule="evenodd" class="mt2z4gbcg"/><path class="fb4sl08kb"/><path clip-rule="evenodd" class="spenc4h9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-line-end-outline"} {...others} />);
}

export default Component;
