import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e08nudb7u.css';
import '../../css/p/p1r24hbgd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e08nudb7u"/><rect class="p1r24hbgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:commuter-bag"} {...others} />);
}

export default Component;
