import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilr3y11pt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ilr3y11pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:team-upgrade"} {...others} />);
}

export default Component;
