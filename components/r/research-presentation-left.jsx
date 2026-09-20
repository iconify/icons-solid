import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oypi36bql.css';
import '../../css/v/vxq7rybdf.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="oypi36bql"/><path class="vxq7rybdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:research-presentation-left"} {...others} />);
}

export default Component;
