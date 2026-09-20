import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcaebbcnz.css';
import '../../css/n/n2luvz5yf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bcaebbcnz"/><path class="n2luvz5yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:board-game-dice-2-bold"} {...others} />);
}

export default Component;
