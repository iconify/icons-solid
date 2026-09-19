import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c543isbeu.css';
import '../../css/b/bdousj5fz.css';
import '../../css/y/ysq3he5vq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c543isbeu"/><path class="bdousj5fz"/><path class="ysq3he5vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:people-speak"} {...others} />);
}

export default Component;
