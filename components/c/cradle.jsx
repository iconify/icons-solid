import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sq6q_uh4x.css';
import '../../css/o/oarw0eb9c.css';
import '../../css/e/ebldlibvt.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="sq6q_uh4x"/><path class="oarw0eb9c"/><path class="ebldlibvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cradle"} {...others} />);
}

export default Component;
