import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcdk4ubif.css';
import '../../css/b/baziz2k_k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mcdk4ubif"/><path class="baziz2k_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tracearr-dark"} {...others} />);
}

export default Component;
