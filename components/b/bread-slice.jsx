import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-1z7t7dt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-1z7t7dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bread-slice"} {...others} />);
}

export default Component;
