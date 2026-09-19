import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpud8lb0h.css';
import '../../css/p/p8s23_l4e.css';
import '../../css/f/f66-habgz.css';
import '../../css/m/mpdz9zp2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wpud8lb0h"/><path class="p8s23_l4e"/><path clip-rule="evenodd" class="f66-habgz"/><path class="mpdz9zp2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:shared-wallet-filled"} {...others} />);
}

export default Component;
