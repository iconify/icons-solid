import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m7ikj4brc.css';
import '../../css/t/thws8cc0h.css';
import '../../css/r/r-yigfbgu.css';
import '../../css/j/jnbx89z3f.css';
import '../../css/f/feq4sitoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m7ikj4brc wm-k"/><path class="thws8cc0h wm-a"/><path class="r-yigfbgu wm-shadow"/><path class="jnbx89z3f wm-k"/><path class="feq4sitoq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-input-engrave"} {...others} />);
}

export default Component;
