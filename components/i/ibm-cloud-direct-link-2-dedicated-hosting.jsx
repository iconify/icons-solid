import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt8p0k40b.css';
import '../../css/u/u4b1utgwb.css';
import '../../css/h/hf9tixklt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kt8p0k40b"/><path class="u4b1utgwb"/><path class="hf9tixklt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-direct-link-2-dedicated-hosting"} {...others} />);
}

export default Component;
