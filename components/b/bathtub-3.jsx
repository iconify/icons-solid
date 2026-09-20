import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b2v261bqj.css';
import '../../css/t/twu97bc7j.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="b2v261bqj"/><path class="twu97bc7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bathtub-3"} {...others} />);
}

export default Component;
