import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnmlbv_ah.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cnmlbv_ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tigera-dark"} {...others} />);
}

export default Component;
