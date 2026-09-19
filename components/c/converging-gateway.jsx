import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z2qxq_b6e.css';
import '../../css/n/nwy44fbty.css';
import '../../css/g/gg07ndbtc.css';
import '../../css/i/i_k4cdv3c.css';
import '../../css/j/j7uafdcoz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="z2qxq_b6e"/><path class="nwy44fbty"/><path class="gg07ndbtc"/><path class="i_k4cdv3c"/><path class="j7uafdcoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:converging-gateway"} {...others} />);
}

export default Component;
