import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s73pzob8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s73pzob8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:cloaked-figure-on-horseback"} {...others} />);
}

export default Component;
