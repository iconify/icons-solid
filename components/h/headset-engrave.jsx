import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xzk3ecj6k.css';
import '../../css/h/hegkb1m4u.css';
import '../../css/c/cvk-bup-z.css';
import '../../css/a/alwzv4b_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xzk3ecj6k"/><path class="hegkb1m4u wm-shadow"/><path class="cvk-bup-z"/><path class="alwzv4b_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headset-engrave"} {...others} />);
}

export default Component;
