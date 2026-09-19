import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odyt2ebza.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="odyt2ebza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sand-snake"} {...others} />);
}

export default Component;
