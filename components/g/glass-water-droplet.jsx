import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q51ogv1zj.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="q51ogv1zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:glass-water-droplet"} {...others} />);
}

export default Component;
