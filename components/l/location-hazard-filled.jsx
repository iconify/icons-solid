import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o88u_xb9d.css';
import '../../css/r/r7xl8ggtz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o88u_xb9d"/><path class="r7xl8ggtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-hazard-filled"} {...others} />);
}

export default Component;
