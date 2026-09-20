import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr-i3_k_n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cr-i3_k_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:okd-light"} {...others} />);
}

export default Component;
