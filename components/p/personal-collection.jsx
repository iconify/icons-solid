import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bshyy_b6k.css';
import '../../css/d/dp4hdybeo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="bshyy_b6k"/><path class="dp4hdybeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:personal-collection"} {...others} />);
}

export default Component;
