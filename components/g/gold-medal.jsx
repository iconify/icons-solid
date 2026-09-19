import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m66g3kb5k.css';
import '../../css/g/g00mx43ai.css';
import '../../css/i/ij785dbcr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="m66g3kb5k"/><path class="g00mx43ai"/><path class="ij785dbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gold-medal"} {...others} />);
}

export default Component;
