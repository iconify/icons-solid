import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bmax3yb1x.css';
import '../../css/m/mr-c0lbac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bmax3yb1x"/><path class="mr-c0lbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vip-one"} {...others} />);
}

export default Component;
