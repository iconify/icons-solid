import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ywn0ijbmf.css';
import '../../css/f/f5-lpey4g.css';
import '../../css/y/ypv0z_bsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ywn0ijbmf"/><path class="f5-lpey4g wm-shadow"/><path class="ypv0z_bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sailboat-engrave"} {...others} />);
}

export default Component;
