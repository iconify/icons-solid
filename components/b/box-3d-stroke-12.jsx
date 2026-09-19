import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1uwanbmh.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="p1uwanbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:box-3d-stroke-12"} {...others} />);
}

export default Component;
