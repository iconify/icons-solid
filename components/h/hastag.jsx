import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j_1c6xj2c.css';
import '../../css/q/qbypq5_fu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="j_1c6xj2c"/><path class="qbypq5_fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:hastag"} {...others} />);
}

export default Component;
