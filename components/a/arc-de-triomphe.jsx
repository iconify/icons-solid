import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xdtb-bc_r.css';
import '../../css/k/kyp5fljps.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xdtb-bc_r"/><path class="kyp5fljps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:arc-de-triomphe"} {...others} />);
}

export default Component;
