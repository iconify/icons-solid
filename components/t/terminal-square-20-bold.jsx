import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkpulpb9y.css';
import '../../css/c/cp728ccvd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jkpulpb9y"/><path class="cp728ccvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terminal-square-20-bold"} {...others} />);
}

export default Component;
