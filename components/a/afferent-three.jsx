import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pqey3lxda.css';
import '../../css/u/u7hylqbkt.css';
import '../../css/v/vkbnpccsv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pqey3lxda"/><path class="u7hylqbkt"/><path class="vkbnpccsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:afferent-three"} {...others} />);
}

export default Component;
