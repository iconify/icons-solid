import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_ij37bly.css';
import '../../css/c/c3p_xw4dl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_ij37bly"/><path class="c3p_xw4dl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:acquiremock-dark"} {...others} />);
}

export default Component;
