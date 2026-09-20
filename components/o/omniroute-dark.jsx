import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nulm-216m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nulm-216m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:omniroute-dark"} {...others} />);
}

export default Component;
