import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q4ah8fbsm.css';
import '../../css/y/yyru89eax.css';
import '../../css/k/kgl-8sirp.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';
import '../../css/m/miknsv_yb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q4ah8fbsm wm-k"/><path class="wm-s yyru89eax"/><path class="kgl-8sirp wm-shadow"/><path class="ain1tnbxt wm-k"/><path class="sy7kpcbuo wm-a"/><path class="miknsv_yb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-plus-engrave"} {...others} />);
}

export default Component;
