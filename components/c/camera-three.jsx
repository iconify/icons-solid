import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rd9mw5o4z.css';
import '../../css/f/fp94dub4c.css';
import '../../css/x/xq36oibuq.css';
import '../../css/i/i46u6tbey.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="rd9mw5o4z"/><path class="fp94dub4c"/><circle class="xq36oibuq"/><path class="i46u6tbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:camera-three"} {...others} />);
}

export default Component;
