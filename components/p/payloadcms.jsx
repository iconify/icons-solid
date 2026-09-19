import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux66g_b8x.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ux66g_b8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:payloadcms"} {...others} />);
}

export default Component;
