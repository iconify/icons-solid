import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdfl0cm_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qdfl0cm_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-game-360-vr"} {...others} />);
}

export default Component;
