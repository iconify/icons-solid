import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v-uycmb5d.css';
import '../../css/k/kgb1ftbgf.css';
import '../../css/r/rfoq9gqca.css';
import '../../css/p/psuc-s3be.css';
import '../../css/w/wlb0b7siw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v-uycmb5d wm-k"/><path class="kgb1ftbgf wm-a"/><path class="rfoq9gqca wm-shadow"/><path class="psuc-s3be wm-k"/><path class="wlb0b7siw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crayon-engrave"} {...others} />);
}

export default Component;
