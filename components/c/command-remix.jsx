import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0h8lzzgo.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="i0h8lzzgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:command-remix"} {...others} />);
}

export default Component;
