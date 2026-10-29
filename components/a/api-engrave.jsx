import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ko7dz5wwb.css';
import '../../css/l/l102dbhsr.css';
import '../../css/b/bykglcbce.css';
import '../../css/v/v86i0g9gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ko7dz5wwb wm-k"/><path class="l102dbhsr wm-shadow"/><path class="bykglcbce wm-k"/><path class="v86i0g9gf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:api-engrave"} {...others} />);
}

export default Component;
