import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/besea9ybt.css';
import '../../css/i/imxus4b6x.css';
import '../../css/i/i47_jpt1d.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="besea9ybt"/><path class="imxus4b6x"/><path class="i47_jpt1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:curve-arrow-right-9"} {...others} />);
}

export default Component;
