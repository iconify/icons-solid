import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/h8q7-oy7e.css';
import '../../css/w/wvv-n6bjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="h8q7-oy7e"/><path class="wvv-n6bjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bell-notification"} {...others} />);
}

export default Component;
