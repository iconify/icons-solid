import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd9zgnr0r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hd9zgnr0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:archive-research"} {...others} />);
}

export default Component;
