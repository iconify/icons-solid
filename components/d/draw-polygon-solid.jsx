import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux7dz1b3h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ux7dz1b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:draw-polygon-solid"} {...others} />);
}

export default Component;
