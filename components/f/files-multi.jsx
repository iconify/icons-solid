import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/nquyz4brn.css';
import '../../css/i/i9-9d0bns.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="nquyz4brn"/><path class="i9-9d0bns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:files-multi"} {...others} />);
}

export default Component;
