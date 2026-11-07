import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt6umrt6x.css';
import '../../css/p/p60zoqpev.css';
import '../../css/m/ma9vvmbog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qt6umrt6x"/><path class="p60zoqpev"/><path clip-rule="evenodd" class="ma9vvmbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-5-outline"} {...others} />);
}

export default Component;
