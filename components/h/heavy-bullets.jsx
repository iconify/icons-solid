import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/setq1eb9e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="setq1eb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:heavy-bullets"} {...others} />);
}

export default Component;
