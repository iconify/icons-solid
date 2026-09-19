import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emz1kui1y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="emz1kui1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:shoulder-bag"} {...others} />);
}

export default Component;
