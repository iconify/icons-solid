import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj0_4iwbe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rj0_4iwbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:confirmed"} {...others} />);
}

export default Component;
