import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fwn8pmily.css';
import '../../css/b/bjelf9h6e.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="fwn8pmily"/><path class="bjelf9h6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:appartment-2"} {...others} />);
}

export default Component;
