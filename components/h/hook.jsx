import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/w/woc-rys6j.css';
import '../../css/p/pcr56im0i.css';
import '../../css/d/drcxrkztn.css';
import '../../css/x/xwxyu6b0z.css';
import '../../css/p/p3u8rmbhi.css';
import '../../css/f/fhiig8vza.css';
import '../../css/e/es3tbobhh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="woc-rys6j"/><path class="pcr56im0i"/><path class="drcxrkztn"/><path class="xwxyu6b0z"/><path class="p3u8rmbhi"/><path class="fhiig8vza"/><path class="es3tbobhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:hook"} {...others} />);
}

export default Component;
