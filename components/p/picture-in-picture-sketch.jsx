import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/flbl44beh.css';
import '../../css/y/yp_dyqbmy.css';
import '../../css/i/igksilbgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="flbl44beh"/><path class="wm-k yp_dyqbmy"/><path class="igksilbgd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:picture-in-picture-sketch"} {...others} />);
}

export default Component;
