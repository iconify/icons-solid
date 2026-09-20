import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m5ozzbnit.css';
import '../../css/i/imstvac3c.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="m5ozzbnit"/><path class="imstvac3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:contrass-alt-6"} {...others} />);
}

export default Component;
