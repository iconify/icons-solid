import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wcn2l_k2r.css';
import '../../css/s/s9pr5ybjc.css';
import '../../css/h/hsaip4lhv.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="wcn2l_k2r"/><path class="s9pr5ybjc"/><path class="hsaip4lhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:camping-gas"} {...others} />);
}

export default Component;
