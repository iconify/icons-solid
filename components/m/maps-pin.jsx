import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/ukljtvbzy.css';
import '../../css/u/u4oyzzq3e.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="ukljtvbzy"/><path class="u4oyzzq3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:maps-pin"} {...others} />);
}

export default Component;
