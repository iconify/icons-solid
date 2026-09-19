import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd7bbubdf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yd7bbubdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:lee-enfield"} {...others} />);
}

export default Component;
