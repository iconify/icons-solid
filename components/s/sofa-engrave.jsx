import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xd4aimb_j.css';
import '../../css/n/n6z362bnb.css';
import '../../css/s/sxuvjhbsh.css';
import '../../css/g/gybz7ebzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xd4aimb_j"/><path class="n6z362bnb wm-shadow"/><path class="sxuvjhbsh"/><path class="gybz7ebzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sofa-engrave"} {...others} />);
}

export default Component;
