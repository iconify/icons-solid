import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cjdo5xbkk.css';
import '../../css/x/xz5kyqywx.css';
import '../../css/m/mjnbjcb2r.css';
import '../../css/s/srwtuibgi.css';
import '../../css/p/p16ta_b_b.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cjdo5xbkk wm-shadow"/><path class="xz5kyqywx"/><path class="mjnbjcb2r"/><path class="srwtuibgi"/><path class="p16ta_b_b"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wifi-off"} {...others} />);
}

export default Component;
