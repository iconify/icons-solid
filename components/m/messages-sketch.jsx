import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yj8f4c1fl.css';
import '../../css/l/ly64macnz.css';
import '../../css/c/cpfp9vbvk.css';
import '../../css/i/iusab3bxz.css';
import '../../css/l/l6nox-bis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-a yj8f4c1fl"/><path class="ly64macnz wm-k"/><path class="cpfp9vbvk wm-k"/><path class="iusab3bxz wm-a"/><path class="l6nox-bis wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:messages-sketch"} {...others} />);
}

export default Component;
