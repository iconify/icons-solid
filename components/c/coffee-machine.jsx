import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xeib-6g1x.css';
import '../../css/u/uk-s-y9pi.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="xeib-6g1x"/><path class="uk-s-y9pi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:coffee-machine"} {...others} />);
}

export default Component;
