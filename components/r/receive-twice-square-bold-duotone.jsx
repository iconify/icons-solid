import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/x/xdf-115pn.css';
import '../../css/p/pg11khr9e.css';
import '../../css/x/x4rvpjbds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="xdf-115pn"/><path class="pg11khr9e"/><path class="x4rvpjbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:receive-twice-square-bold-duotone"} {...others} />);
}

export default Component;
