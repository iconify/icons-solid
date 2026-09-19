import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwjqv_u-d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hwjqv_u-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:saber-tooth"} {...others} />);
}

export default Component;
