import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dciv8jbgc.css';
import '../../css/p/pnxq9t99l.css';
import '../../css/a/axxxxzb-y.css';
import '../../css/k/kk1pqcckm.css';
import '../../css/w/w3orgp4gc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dciv8jbgc"/><path class="pnxq9t99l"/><path class="axxxxzb-y"/><path class="kk1pqcckm"/><path class="w3orgp4gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:boombox-bold-duotone"} {...others} />);
}

export default Component;
