import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb8s_pcfe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sb8s_pcfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hook0-light"} {...others} />);
}

export default Component;
