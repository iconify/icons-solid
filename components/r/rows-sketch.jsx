import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bbe_xybxr.css';
import '../../css/k/kizbw6bue.css';
import '../../css/j/jifcohbtm.css';
import '../../css/h/h5utuuptd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bbe_xybxr"/><path class="kizbw6bue wm-a"/><path class="jifcohbtm wm-k"/><path class="h5utuuptd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rows-sketch"} {...others} />);
}

export default Component;
