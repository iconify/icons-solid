import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx3ex45_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hx3ex45_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:card-game-diamond-solid"} {...others} />);
}

export default Component;
