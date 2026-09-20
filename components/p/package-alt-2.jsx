import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w7lfhmbwk.css';
import '../../css/p/pard6diuc.css';
import '../../css/k/kou1ambby.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="w7lfhmbwk"/><path class="pard6diuc"/><path class="kou1ambby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:package-alt-2"} {...others} />);
}

export default Component;
