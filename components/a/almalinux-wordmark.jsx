import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1vjgr2ym.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k1vjgr2ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:almalinux-wordmark"} {...others} />);
}

export default Component;
