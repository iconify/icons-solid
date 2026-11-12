import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgbaqzbcl.css';
import '../../css/y/yurlis35z.css';
import '../../css/e/efp1h8bop.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mgbaqzbcl"/><path class="yurlis35z"/><path class="efp1h8bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mailrise-dark"} {...others} />);
}

export default Component;
