import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h-0rldb5a.css';
import '../../css/l/lsc_pgbhs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h-0rldb5a"/><path class="lsc_pgbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:slippers"} {...others} />);
}

export default Component;
