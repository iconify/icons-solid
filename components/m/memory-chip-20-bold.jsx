import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2hel0pen.css';
import '../../css/b/b5hazkbpz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j2hel0pen"/><path class="b5hazkbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:memory-chip-20-bold"} {...others} />);
}

export default Component;
