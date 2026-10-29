import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x_32s8b6z.css';
import '../../css/y/yri-nfb2u.css';
import '../../css/a/aa7exib7i.css';
import '../../css/j/jura4nbok.css';
import '../../css/f/fcpcu9i2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k x_32s8b6z"/><path class="wm-a yri-nfb2u"/><path class="aa7exib7i wm-shadow"/><path class="jura4nbok wm-k"/><path class="fcpcu9i2b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:magnet-engrave"} {...others} />);
}

export default Component;
