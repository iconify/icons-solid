import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9_uklbjc.css';
import '../../css/p/pv-24ob8n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t9_uklbjc"/><path class="pv-24ob8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:microphone-solid"} {...others} />);
}

export default Component;
