import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlfx1wn9y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hlfx1wn9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:kevlar-vest"} {...others} />);
}

export default Component;
