import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r39cz3-vs.css';
import '../../css/p/pg26usaua.css';
import '../../css/a/auntp9bfb.css';
import '../../css/c/ccjp42_uk.css';
import '../../css/v/vpudylh8f.css';
import '../../css/l/lgb-9cchi.css';
import '../../css/d/dpicowbor.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="r39cz3-vs"/><path class="pg26usaua"/><path class="auntp9bfb"/><path class="ccjp42_uk"/><path class="vpudylh8f"/><rect class="lgb-9cchi"/><path class="dpicowbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:land-surveying"} {...others} />);
}

export default Component;
