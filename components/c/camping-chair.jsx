import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zab0rqr1f.css';
import '../../css/v/vtgn5bc2c.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="zab0rqr1f"/><path class="vtgn5bc2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:camping-chair"} {...others} />);
}

export default Component;
