import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/nxqm3gbik.css';
import '../../css/w/whju3ebol.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="nxqm3gbik"/><path class="whju3ebol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:up-alt"} {...others} />);
}

export default Component;
