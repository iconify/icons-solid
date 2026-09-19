import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4unv_v_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f4unv_v_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:smoking-finger"} {...others} />);
}

export default Component;
