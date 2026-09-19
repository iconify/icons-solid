import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwb7bbe5n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jwb7bbe5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:muscle-up"} {...others} />);
}

export default Component;
