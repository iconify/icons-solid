import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m7vy_ebxn.css';
import '../../css/s/slf7svyff.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="m7vy_ebxn"/><path class="slf7svyff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:window-5"} {...others} />);
}

export default Component;
