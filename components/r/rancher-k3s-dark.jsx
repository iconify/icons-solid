import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1qg1ub9h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a1qg1ub9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-k3s-dark"} {...others} />);
}

export default Component;
