import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/oxacldbke.css';
import '../../css/d/dsln90bva.css';
import '../../css/p/plf46m9uf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="oxacldbke"/><path class="dsln90bva"/><circle class="plf46m9uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-music-one"} {...others} />);
}

export default Component;
