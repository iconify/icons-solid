import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cs4oel9os.css';
import '../../css/o/otz57pxwg.css';
import '../../css/o/osdk9kf8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cs4oel9os"/><path class="otz57pxwg"/><path class="osdk9kf8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:laptop"} {...others} />);
}

export default Component;
