import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdvm4wbmz.css';
import '../../css/j/ji70huh2p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hdvm4wbmz"/><path class="ji70huh2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:couchbase-wordmark"} {...others} />);
}

export default Component;
