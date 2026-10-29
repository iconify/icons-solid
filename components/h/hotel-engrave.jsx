import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jlhmpgb3x.css';
import '../../css/s/ssovezbhm.css';
import '../../css/b/byn4e2bty.css';
import '../../css/m/m5jxqbcrl.css';
import '../../css/n/n2vn76bad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jlhmpgb3x wm-k"/><path class="ssovezbhm wm-a"/><path class="byn4e2bty wm-shadow"/><path class="m5jxqbcrl wm-k"/><path class="n2vn76bad wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hotel-engrave"} {...others} />);
}

export default Component;
