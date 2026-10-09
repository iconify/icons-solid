import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_l85o6fg.css';
import '../../css/d/drwzrccpo.css';
import '../../css/c/cgyi4tt_h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i_l85o6fg"/><path class="drwzrccpo"/><path class="cgyi4tt_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steel-mill-48"} {...others} />);
}

export default Component;
