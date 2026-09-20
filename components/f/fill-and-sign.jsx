import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/w9ogbnh2c.css';
import '../../css/z/zce-esbct.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="w9ogbnh2c"/><path class="zce-esbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:fill-and-sign"} {...others} />);
}

export default Component;
