import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u654i1bhh.css';
import '../../css/r/r28egxbtw.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 3)" class="bi12bsetm"><path class="u654i1bhh"/><circle class="r28egxbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:tag"} {...others} />);
}

export default Component;
