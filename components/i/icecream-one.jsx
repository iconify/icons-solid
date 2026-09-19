import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/no5i_8bqu.css';
import '../../css/d/dx7nwntkv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="no5i_8bqu"/><path class="dx7nwntkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:icecream-one"} {...others} />);
}

export default Component;
