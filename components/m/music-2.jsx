import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swfk1bc4e.css';
import '../../css/d/dzcaxfb9b.css';
import '../../css/x/xzwdldb2p.css';
import '../../css/e/el_6yubsq.css';
import '../../css/x/xzf88acgf.css';
import '../../css/c/cwydbfbae.css';
import '../../css/a/aquxf01fx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swfk1bc4e wm-shadow"/><path class="dzcaxfb9b"/><path class="xzwdldb2p"/><path class="el_6yubsq"/><path class="xzf88acgf"/><path class="cwydbfbae wm-shine"/><path class="aquxf01fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:music-2"} {...others} />);
}

export default Component;
