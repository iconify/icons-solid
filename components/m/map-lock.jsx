import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-1k3_b2n.css';
import '../../css/q/qjd9umv4n.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="z-1k3_b2n"/><path class="qjd9umv4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-lock"} {...others} />);
}

export default Component;
