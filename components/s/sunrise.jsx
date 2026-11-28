import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r_y89cbyz.css';
import '../../css/z/z7sff1b_p.css';
import '../../css/s/s4yk83x2k.css';
import '../../css/x/x_yzv2u8n.css';
import '../../css/n/ntf_5z8_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r_y89cbyz"/><path class="z7sff1b_p"/><path class="s4yk83x2k"/><path class="x_yzv2u8n"/><path class="ntf_5z8_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sunrise"} {...others} />);
}

export default Component;
