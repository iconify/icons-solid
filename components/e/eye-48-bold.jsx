import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybb_vebim.css';
import '../../css/w/wdaa5te7j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ybb_vebim"/><path class="wdaa5te7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-48-bold"} {...others} />);
}

export default Component;
