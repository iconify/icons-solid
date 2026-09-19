import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh4s1z2xe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nh4s1z2xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sea-urchin"} {...others} />);
}

export default Component;
