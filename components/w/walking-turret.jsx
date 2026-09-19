import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjuvn4bhx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jjuvn4bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:walking-turret"} {...others} />);
}

export default Component;
