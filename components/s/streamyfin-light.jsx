import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djvfn5bwe.css';
import '../../css/i/ih2euw71h.css';
import '../../css/v/vvhqz38eo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="djvfn5bwe"/><path class="ih2euw71h"/><path class="vvhqz38eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamyfin-light"} {...others} />);
}

export default Component;
