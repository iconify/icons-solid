import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xbfmysp2p.css';
import '../../css/o/o019wez_i.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="xbfmysp2p"/><path class="o019wez_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:jetski"} {...others} />);
}

export default Component;
