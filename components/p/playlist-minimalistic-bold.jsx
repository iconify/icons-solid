import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzsz1rwsm.css';
import '../../css/g/ggufc0siv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pzsz1rwsm"/><path class="ggufc0siv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-bold"} {...others} />);
}

export default Component;
