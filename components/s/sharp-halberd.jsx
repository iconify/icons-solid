import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otfv3cb9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="otfv3cb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sharp-halberd"} {...others} />);
}

export default Component;
