import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em4hhg6ix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="em4hhg6ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:medal-skull"} {...others} />);
}

export default Component;
