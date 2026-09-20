import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dgq8ujbev.css';
import '../../css/i/iyldn6b4j.css';
import '../../css/h/hqofeaczp.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="dgq8ujbev"/><path class="iyldn6b4j"/><path class="hqofeaczp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:music-album-2"} {...others} />);
}

export default Component;
