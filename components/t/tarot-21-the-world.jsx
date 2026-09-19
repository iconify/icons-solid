import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab48hf36a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ab48hf36a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tarot-21-the-world"} {...others} />);
}

export default Component;
