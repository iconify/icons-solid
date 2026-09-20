import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/u5qwhaclv.css';
import '../../css/h/h7p0guzze.css';
import '../../css/p/pzitbways.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="u5qwhaclv"/><path class="h7p0guzze"/><path class="pzitbways"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bathroom-2"} {...others} />);
}

export default Component;
