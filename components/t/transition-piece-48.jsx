import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqrfj76nr.css';
import '../../css/j/j_lztvbdd.css';
import '../../css/p/p3mle5ske.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oqrfj76nr"/><path class="j_lztvbdd"/><path class="p3mle5ske"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transition-piece-48"} {...others} />);
}

export default Component;
