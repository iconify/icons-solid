import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dufcmvb1k.css';
import '../../css/y/y47xabgrh.css';
import '../../css/g/gyb8uc20w.css';
import '../../css/z/zaho54k3g.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="dufcmvb1k"/><path class="y47xabgrh"/><path class="gyb8uc20w"/><path class="zaho54k3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:switch-double"} {...others} />);
}

export default Component;
