import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id5b2zbzl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="id5b2zbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:medical-pack-alt"} {...others} />);
}

export default Component;
