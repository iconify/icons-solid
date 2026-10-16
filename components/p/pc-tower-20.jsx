import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb6fqqb0z.css';
import '../../css/u/u8f88948k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jb6fqqb0z"/><path class="u8f88948k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pc-tower-20"} {...others} />);
}

export default Component;
