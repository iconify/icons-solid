import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5fzb4bue.css';
import '../../css/i/iennupbfk.css';
import '../../css/z/ztja4fb7t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f5fzb4bue"/><path class="iennupbfk"/><path class="ztja4fb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-cw-48"} {...others} />);
}

export default Component;
