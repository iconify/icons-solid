import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0b5pxbkr.css';
import '../../css/w/wj_mk056d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j0b5pxbkr"/><path class="wj_mk056d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scope-3-48"} {...others} />);
}

export default Component;
