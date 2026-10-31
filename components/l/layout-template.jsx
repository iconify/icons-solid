import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m750iub0b.css';
import '../../css/n/nvt5opb_s.css';
import '../../css/x/xm_fkjuyf.css';
import '../../css/v/v4eygbcwz.css';
import '../../css/y/y91hq_wxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m750iub0b wm-shadow"/><path class="nvt5opb_s"/><path class="xm_fkjuyf"/><path class="v4eygbcwz"/><path class="y91hq_wxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:layout-template"} {...others} />);
}

export default Component;
