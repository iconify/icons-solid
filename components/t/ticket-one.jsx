import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/la9q92bit.css';
import '../../css/g/gitl-abod.css';
import '../../css/e/e1cwyl8kl.css';
import '../../css/l/lpzby4b8w.css';
import '../../css/x/x_gychh4s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="la9q92bit"/><path class="gitl-abod"/><path class="e1cwyl8kl"/><path class="lpzby4b8w"/><path class="x_gychh4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ticket-one"} {...others} />);
}

export default Component;
