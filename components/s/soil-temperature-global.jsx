import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5ewtco_s.css';
import '../../css/v/vpg-ykb3g.css';
import '../../css/a/axl75o_4d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q5ewtco_s"/><path class="vpg-ykb3g"/><path class="axl75o_4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:soil-temperature-global"} {...others} />);
}

export default Component;
