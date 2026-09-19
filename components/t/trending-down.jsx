import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g1ljurqav.css';
import '../../css/p/p1d84wbxo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g1ljurqav"/><path class="p1d84wbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:trending-down"} {...others} />);
}

export default Component;
