import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vq_9koh7c.css';
import '../../css/l/lsjoge_0j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vq_9koh7c"/><path class="lsjoge_0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:return"} {...others} />);
}

export default Component;
