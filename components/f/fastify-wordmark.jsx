import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwwbofhyd.css';
import '../../css/c/cr89sgbzt.css';
import '../../css/n/nm48-zs_v.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vwwbofhyd"/><path class="cr89sgbzt"/><path class="nm48-zs_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:fastify-wordmark"} {...others} />);
}

export default Component;
