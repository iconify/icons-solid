import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/nquyz4brn.css';
import '../../css/t/tgpx3msdp.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="nquyz4brn"/><path class="tgpx3msdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:files-history"} {...others} />);
}

export default Component;
