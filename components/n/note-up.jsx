import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k5lb02b3g.css';
import '../../css/n/nyqb1nbmr.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="k5lb02b3g"/><path class="nyqb1nbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:note-up"} {...others} />);
}

export default Component;
