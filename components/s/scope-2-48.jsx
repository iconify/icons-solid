import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0b5pxbkr.css';
import '../../css/e/ep0q_pklm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j0b5pxbkr"/><path class="ep0q_pklm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scope-2-48"} {...others} />);
}

export default Component;
