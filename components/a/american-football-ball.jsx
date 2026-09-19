import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htd5qgbdq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="htd5qgbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:american-football-ball"} {...others} />);
}

export default Component;
