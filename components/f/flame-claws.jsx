import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lthiv2liq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lthiv2liq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:flame-claws"} {...others} />);
}

export default Component;
