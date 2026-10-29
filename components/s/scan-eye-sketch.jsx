import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v9ome130x.css';
import '../../css/l/ljy9tlj1f.css';
import '../../css/v/vcac4wbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v9ome130x wm-k"/><path class="ljy9tlj1f wm-k"/><path class="vcac4wbmb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-eye-sketch"} {...others} />);
}

export default Component;
