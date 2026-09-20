import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6i2682uu.css';
import '../../css/x/xai0083ma.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t6i2682uu"/><path class="xai0083ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-board-game-dice"} {...others} />);
}

export default Component;
