import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr_9c2bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yr_9c2bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:vinyl"} {...others} />);
}

export default Component;
