import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prx_0ebow.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="prx_0ebow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bouncing-spring"} {...others} />);
}

export default Component;
