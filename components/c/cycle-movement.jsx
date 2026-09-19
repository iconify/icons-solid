import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c6icjcb7c.css';
import '../../css/x/xvt9lzner.css';
import '../../css/v/vglkpybfg.css';
import '../../css/q/q6x5n8bwx.css';
import '../../css/r/rzl9oycze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c6icjcb7c"/><path class="xvt9lzner"/><path class="vglkpybfg"/><path class="q6x5n8bwx"/><path class="rzl9oycze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cycle-movement"} {...others} />);
}

export default Component;
