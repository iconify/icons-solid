import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/voxy1aceb.css';
import '../../css/n/nbvwk4b2s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="voxy1aceb"/><path class="nbvwk4b2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tent"} {...others} />);
}

export default Component;
