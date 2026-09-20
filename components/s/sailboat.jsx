import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/segcalivk.css';
import '../../css/y/y_l-c2bnu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="segcalivk"/><path class="y_l-c2bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:sailboat"} {...others} />);
}

export default Component;
