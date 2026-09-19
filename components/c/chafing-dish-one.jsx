import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zk1t69b_r.css';
import '../../css/w/wy_xx9b5e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zk1t69b_r"/><path class="wy_xx9b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chafing-dish-one"} {...others} />);
}

export default Component;
