import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk-9sabgk.css';
import '../../css/s/so2937y5n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tk-9sabgk"/><path class="so2937y5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-game-pool-snooker-ball"} {...others} />);
}

export default Component;
