import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9a2xk5uq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m9a2xk5uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:cricket-bat"} {...others} />);
}

export default Component;
