import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyl_5zpad.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lyl_5zpad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:card-10-clubs"} {...others} />);
}

export default Component;
