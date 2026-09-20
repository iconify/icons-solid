import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3tro_brn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c3tro_brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-game-pacman"} {...others} />);
}

export default Component;
