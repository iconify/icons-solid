import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dg0zgsbkz.css';
import '../../css/f/fj14r_biv.css';
import '../../css/a/aia4wcpia.css';
import '../../css/h/hjxvjzbmm.css';
import '../../css/a/a-ykpnb1v.css';
import '../../css/v/v5gb87bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dg0zgsbkz wm-k"/><path class="fj14r_biv wm-a"/><path class="aia4wcpia wm-shadow"/><path class="hjxvjzbmm wm-k"/><path class="a-ykpnb1v wm-s"/><path class="v5gb87bbj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plum-blossom-engrave"} {...others} />);
}

export default Component;
