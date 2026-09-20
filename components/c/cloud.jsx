import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/u7n78m30y.css';
import '../../css/n/ndvxg3usm.css';
import '../../css/r/rl5sxph5k.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="u7n78m30y"/><path class="ndvxg3usm"/><path class="rl5sxph5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cloud"} {...others} />);
}

export default Component;
