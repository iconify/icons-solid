import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hscy5fdck.css';
import '../../css/k/kdlzsghls.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hscy5fdck"/><path class="kdlzsghls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oauth2-proxy-light"} {...others} />);
}

export default Component;
