import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bi3imne-t.css';
import '../../css/x/xdpywbclq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bi3imne-t"/><path class="xdpywbclq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flip-vertical2"} {...others} />);
}

export default Component;
