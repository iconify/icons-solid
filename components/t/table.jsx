import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/w/wk8bg5zve.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="bwpzy-b4l"/><path class="wk8bg5zve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:table"} {...others} />);
}

export default Component;
