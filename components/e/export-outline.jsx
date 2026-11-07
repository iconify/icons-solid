import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzryhs1ak.css';
import '../../css/o/on5h-v5us.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzryhs1ak"/><path class="on5h-v5us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:export-outline"} {...others} />);
}

export default Component;
