import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9iptvk5n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g9iptvk5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:card-4-diamonds"} {...others} />);
}

export default Component;
