import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr18i9bjs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nr18i9bjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:qaitbay-citadel"} {...others} />);
}

export default Component;
