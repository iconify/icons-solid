import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gi672gb1p.css';
import '../../css/i/icniaac6a.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="gi672gb1p"/><path class="icniaac6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:turn-right-sign"} {...others} />);
}

export default Component;
