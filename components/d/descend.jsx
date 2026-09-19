import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m2sizbben.css';
import '../../css/o/osm-1gbrp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="m2sizbben"/><path class="osm-1gbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:descend"} {...others} />);
}

export default Component;
