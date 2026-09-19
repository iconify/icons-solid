import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwzr932tw.css';
import '../../css/s/s1cvkxb_m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cwzr932tw"/><path class="s1cvkxb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opnsense-wordmark"} {...others} />);
}

export default Component;
