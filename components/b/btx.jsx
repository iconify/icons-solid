import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fp1s2kboi.css';
import '../../css/c/caf0fqblc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="fp1s2kboi"/><path class="caf0fqblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:btx"} {...others} />);
}

export default Component;
