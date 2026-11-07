import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1nbikbny.css';
import '../../css/j/jmf54fbtj.css';
import '../../css/t/tbtey3bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g1nbikbny"/><path class="jmf54fbtj"/><path class="tbtey3bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-close-bold-duotone"} {...others} />);
}

export default Component;
