import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kf25jz3yp.css';
import '../../css/v/vbukufbqb.css';
import '../../css/c/c-15_29zx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kf25jz3yp"/><path class="vbukufbqb wm-k"/><path class="c-15_29zx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headphones-sketch"} {...others} />);
}

export default Component;
