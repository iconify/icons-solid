import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz9iv6bwq.css';
import '../../css/p/pq0jslbzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dz9iv6bwq"/><path class="pq0jslbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-right-arrow"} {...others} />);
}

export default Component;
