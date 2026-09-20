import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iearppbef.css';
import '../../css/w/wupf6lbiy.css';
import '../../css/s/sgr_f8btx.css';
import '../../css/m/mzgayy21e.css';
import '../../css/p/p5-s7ibqf.css';
import '../../css/s/snoeot3gk.css';
import '../../css/h/h0mdmlb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iearppbef"/><path class="wupf6lbiy"/><path class="sgr_f8btx"/><path class="mzgayy21e"/><path class="p5-s7ibqf"/><path class="snoeot3gk"/><path class="h0mdmlb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:projector-broken"} {...others} />);
}

export default Component;
