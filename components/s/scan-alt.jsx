import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tyorz8b1c.css';
import '../../css/h/htrjajb8j.css';
import '../../css/y/yqr712bef.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="tyorz8b1c"/><path class="htrjajb8j"/><path class="yqr712bef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:scan-alt"} {...others} />);
}

export default Component;
