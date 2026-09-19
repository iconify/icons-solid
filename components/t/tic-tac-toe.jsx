import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hww2_jbko.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hww2_jbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tic-tac-toe"} {...others} />);
}

export default Component;
