import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu3ov0u1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cu3ov0u1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:view-dashboard-edit-outline"} {...others} />);
}

export default Component;
