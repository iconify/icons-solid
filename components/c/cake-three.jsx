import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u_y8r8pnm.css';
import '../../css/c/cohbn0bma.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="u_y8r8pnm"/><path class="cohbn0bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cake-three"} {...others} />);
}

export default Component;
