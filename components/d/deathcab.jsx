import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsn1rm4hu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dsn1rm4hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:deathcab"} {...others} />);
}

export default Component;
