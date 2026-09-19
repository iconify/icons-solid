import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w33oqo5oh.css';
import '../../css/c/cjcvn3b5o.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="w33oqo5oh"/><path class="cjcvn3b5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rancher-wordmark"} {...others} />);
}

export default Component;
