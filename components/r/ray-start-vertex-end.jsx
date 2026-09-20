import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdc383b_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdc383b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:ray-start-vertex-end"} {...others} />);
}

export default Component;
