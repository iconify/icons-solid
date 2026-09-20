import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l_0tskb9e.css';
import '../../css/d/d-fsfpreg.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="l_0tskb9e"/><path class="d-fsfpreg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:left-sign"} {...others} />);
}

export default Component;
