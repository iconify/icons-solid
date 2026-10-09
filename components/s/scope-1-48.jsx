import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0b5pxbkr.css';
import '../../css/j/jtr7gubri.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j0b5pxbkr"/><path class="jtr7gubri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scope-1-48"} {...others} />);
}

export default Component;
