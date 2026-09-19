import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk7_pcb3m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xk7_pcb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:nokogiri"} {...others} />);
}

export default Component;
