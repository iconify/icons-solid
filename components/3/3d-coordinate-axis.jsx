import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nomj558xa.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="nomj558xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:3d-coordinate-axis"} {...others} />);
}

export default Component;
