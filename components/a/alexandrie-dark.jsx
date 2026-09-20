import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd1k3d-vl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sd1k3d-vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:alexandrie-dark"} {...others} />);
}

export default Component;
