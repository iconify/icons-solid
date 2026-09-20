import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5_03acjz.css';
import '../../css/a/af92m0fzs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d5_03acjz"/><path class="af92m0fzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-card-game-card-club"} {...others} />);
}

export default Component;
