import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mjcjiqbja.css';
import '../../css/l/l0jcfq-9t.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="mjcjiqbja"/><path class="l0jcfq-9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:game-console-cable"} {...others} />);
}

export default Component;
