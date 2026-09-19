import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8xay6bvi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g8xay6bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:claymore-explosive"} {...others} />);
}

export default Component;
