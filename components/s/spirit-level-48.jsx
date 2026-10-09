import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rchvxnb6e.css';
import '../../css/i/i_vwc81mr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rchvxnb6e"/><path class="i_vwc81mr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spirit-level-48"} {...others} />);
}

export default Component;
