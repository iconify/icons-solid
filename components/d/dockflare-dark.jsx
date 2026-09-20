import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyeglmmtr.css';
import '../../css/a/akc_yvbhb.css';
import '../../css/u/ua_s72b4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eyeglmmtr"/><path class="akc_yvbhb"/><path class="ua_s72b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockflare-dark"} {...others} />);
}

export default Component;
