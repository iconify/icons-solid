import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7s82ubdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7s82ubdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:table-pivot"} {...others} />);
}

export default Component;
