import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_7pasz5l.css';
import '../../css/x/xgnmajbrf.css';
import '../../css/t/tss2nab0s.css';
import '../../css/d/d-e0jdbbc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="k_7pasz5l"><path class="xgnmajbrf"/><path class="tss2nab0s"/><path class="d-e0jdbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:camp"} {...others} />);
}

export default Component;
