import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/y27uu_0xr.css';
import '../../css/n/n2x3mnbzy.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="y27uu_0xr"/><path class="n2x3mnbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:double-up-sign"} {...others} />);
}

export default Component;
