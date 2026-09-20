import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fs2mnmb_v.css';
import '../../css/b/bvnv43a5z.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="fs2mnmb_v"/><path class="bvnv43a5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:down-direction-2"} {...others} />);
}

export default Component;
