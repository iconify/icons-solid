import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whvaa_bdm.css';
import '../../css/y/yp--lsbio.css';
import '../../css/d/d_3_miv7p.css';
import '../../css/e/ed_lewb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="whvaa_bdm"/><path class="yp--lsbio"/><path class="d_3_miv7p"/><path clip-rule="evenodd" class="ed_lewb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-2-bold"} {...others} />);
}

export default Component;
