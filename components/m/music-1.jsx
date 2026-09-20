import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuk_quudj.css';
import '../../css/w/w7hoo8bgg.css';
import '../../css/p/p9pkayb8m.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="zuk_quudj"><path class="w7hoo8bgg"/><path class="p9pkayb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:music-1"} {...others} />);
}

export default Component;
