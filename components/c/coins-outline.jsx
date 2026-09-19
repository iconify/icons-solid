import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wp0wlnbao.css';
import '../../css/f/fd-fb67ig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="wp0wlnbao"/><circle class="fd-fb67ig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:coins-outline"} {...others} />);
}

export default Component;
