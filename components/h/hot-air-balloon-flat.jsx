import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0wmq8b7m.css';
import '../../css/s/s7kw4nepq.css';
import '../../css/b/bsy6vgbmq.css';
import '../../css/p/p0yn8_blz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g0wmq8b7m"/><path clip-rule="evenodd" class="s7kw4nepq"/><path class="bsy6vgbmq"/><path class="p0yn8_blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hot-air-balloon-flat"} {...others} />);
}

export default Component;
