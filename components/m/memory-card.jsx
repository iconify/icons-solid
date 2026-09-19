import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t48pb7sst.css';
import '../../css/j/jkf-dfr7c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t48pb7sst"/><path class="jkf-dfr7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:memory-card"} {...others} />);
}

export default Component;
