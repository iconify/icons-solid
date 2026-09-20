import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/la-1jcbia.css';
import '../../css/z/zmo_spbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="la-1jcbia"/><path class="zmo_spbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ticket"} {...others} />);
}

export default Component;
