import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo2uy2bxh.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="jo2uy2bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:map-pin-slash"} {...others} />);
}

export default Component;
