import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flc299r4o.css';
import '../../css/s/sy2gigbio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flc299r4o"/><path class="sy2gigbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:add-folder-bold-duotone"} {...others} />);
}

export default Component;
