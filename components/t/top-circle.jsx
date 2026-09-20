import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hswuj6w7q.css';
import '../../css/w/wvwbcz5yh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="hswuj6w7q"/><path class="wvwbcz5yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:top-circle"} {...others} />);
}

export default Component;
