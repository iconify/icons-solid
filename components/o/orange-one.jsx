import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nw9s2ac_l.css';
import '../../css/l/lgx0jnb_q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nw9s2ac_l"/><path class="lgx0jnb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:orange-one"} {...others} />);
}

export default Component;
