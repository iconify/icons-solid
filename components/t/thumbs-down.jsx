import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfg6x-0ty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfg6x-0ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:thumbs-down"} {...others} />);
}

export default Component;
