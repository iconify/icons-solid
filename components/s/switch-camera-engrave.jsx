import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/je523pkwt.css';
import '../../css/s/s398h1por.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/n/n_bx2obur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="je523pkwt wm-k"/><path class="s398h1por wm-shadow"/><path class="psnkz2bcb wm-k"/><path class="n_bx2obur wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:switch-camera-engrave"} {...others} />);
}

export default Component;
