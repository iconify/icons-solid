import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p21-rnouu.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="p21-rnouu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:fullscreen-alt"} {...others} />);
}

export default Component;
