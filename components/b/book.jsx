import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhy8j5gdx.css';
import '../../css/w/wcx_0x5ex.css';
import '../../css/w/wc9rxabtq.css';
import '../../css/y/yu_ef6bva.css';
import '../../css/p/pjbpt4axn.css';
import '../../css/y/yg5m13bbj.css';
import '../../css/k/k_c5utbuy.css';
import '../../css/p/p1w9m_ped.css';
import '../../css/g/gmh42wbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nhy8j5gdx wm-shadow"/><path class="wcx_0x5ex wm-shadow"/><path class="wc9rxabtq"/><path class="yu_ef6bva"/><path class="pjbpt4axn"/><path class="yg5m13bbj"/><path class="k_c5utbuy"/><path class="p1w9m_ped"/><path class="gmh42wbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:book"} {...others} />);
}

export default Component;
