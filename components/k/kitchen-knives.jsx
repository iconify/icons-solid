import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhe5w9bph.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lhe5w9bph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:kitchen-knives"} {...others} />);
}

export default Component;
