import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq13s2klb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iq13s2klb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:ice-bolt"} {...others} />);
}

export default Component;
