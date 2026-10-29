import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bkvy-pu9k.css';
import '../../css/n/n3402yb9n.css';
import '../../css/h/hehqleh0s.css';
import '../../css/v/vjv-rqbre.css';
import '../../css/r/rasux0b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bkvy-pu9k wm-k"/><path class="n3402yb9n wm-a"/><path class="hehqleh0s wm-shadow"/><path class="vjv-rqbre wm-k"/><path class="rasux0b5a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dollar-sign-engrave"} {...others} />);
}

export default Component;
