import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fs4bv7bod.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/a/a28-wzbev.css';
import '../../css/v/v0rdnccee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fs4bv7bod wm-shadow"/><path class="psnkz2bcb wm-k"/><circle class="a28-wzbev wm-a"/><path class="v0rdnccee wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-off-engrave"} {...others} />);
}

export default Component;
