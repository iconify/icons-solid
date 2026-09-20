import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/abs-kuf_m.css';
import '../../css/u/uqbsafb3a.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="abs-kuf_m"/><path class="uqbsafb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:fireplace"} {...others} />);
}

export default Component;
