import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idyvqg0mc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="idyvqg0mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:gold-scarab"} {...others} />);
}

export default Component;
