import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5j3p6b5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p5j3p6b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:thermometer-hot"} {...others} />);
}

export default Component;
