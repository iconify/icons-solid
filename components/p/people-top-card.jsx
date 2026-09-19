import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/clsvsg_8u.css';
import '../../css/d/dlwj5t8ym.css';
import '../../css/n/nzi04mbzv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="clsvsg_8u"/><circle class="dlwj5t8ym"/><path class="nzi04mbzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:people-top-card"} {...others} />);
}

export default Component;
