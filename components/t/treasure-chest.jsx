import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wtnpixb-s.css';
import '../../css/x/xff5tx9kz.css';
import '../../css/g/g0sf6ebkt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wtnpixb-s"/><path class="xff5tx9kz"/><path class="g0sf6ebkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:treasure-chest"} {...others} />);
}

export default Component;
