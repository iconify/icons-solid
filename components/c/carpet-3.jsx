import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b0s2_3bwe.css';
import '../../css/w/wwati2bae.css';
import '../../css/l/liklveb_t.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="b0s2_3bwe"/><path class="wwati2bae"/><path class="liklveb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:carpet-3"} {...others} />);
}

export default Component;
