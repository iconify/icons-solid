import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy--hfb3b.css';
import '../../css/d/dc1zo4nmc.css';
import '../../css/a/a9d8_nbrl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jy--hfb3b"/><path class="dc1zo4nmc"/><path class="a9d8_nbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-z-cloud-mod-stack"} {...others} />);
}

export default Component;
