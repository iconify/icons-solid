import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkb3oqbwk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="jkb3oqbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:webcam-video"} {...others} />);
}

export default Component;
