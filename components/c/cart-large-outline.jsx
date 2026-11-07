import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfjrhsbdn.css';
import '../../css/t/tvzowjb2p.css';
import '../../css/m/mym-u-jww.css';
import '../../css/b/bogwy2v0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfjrhsbdn"/><path clip-rule="evenodd" class="tvzowjb2p"/><path clip-rule="evenodd" class="mym-u-jww"/><path clip-rule="evenodd" class="bogwy2v0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-outline"} {...others} />);
}

export default Component;
