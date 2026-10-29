import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qxi7yn2rl.css';
import '../../css/n/n8q0-sbxu.css';
import '../../css/m/me3qcxbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qxi7yn2rl"/><path class="n8q0-sbxu wm-shadow"/><path class="me3qcxbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bookmark-engrave"} {...others} />);
}

export default Component;
