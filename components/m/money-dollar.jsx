import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/s7fpsdbif.css';
import '../../css/t/tcqe6dyiy.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="s7fpsdbif"/><path class="tcqe6dyiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:money-dollar"} {...others} />);
}

export default Component;
