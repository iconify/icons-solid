import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/r62vgkt4j.css';
import '../../css/o/ovgpfrqpy.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="r62vgkt4j"/><path class="ovgpfrqpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:money"} {...others} />);
}

export default Component;
