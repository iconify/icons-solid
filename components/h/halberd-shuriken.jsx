import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynfd2zbwq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ynfd2zbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:halberd-shuriken"} {...others} />);
}

export default Component;
