import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryk7c9tyn.css';
import '../../css/r/rv64cqbog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryk7c9tyn"/><path class="rv64cqbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:joystick-alt"} {...others} />);
}

export default Component;
