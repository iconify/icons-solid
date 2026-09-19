import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dy3fzc62t.css';
import '../../css/x/xuoz331um.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dy3fzc62t"/><path class="xuoz331um"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-pants"} {...others} />);
}

export default Component;
