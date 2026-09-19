import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/frpbbwfuh.css';
import '../../css/u/uduaybb5f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="frpbbwfuh"/><path class="uduaybb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xas"} {...others} />);
}

export default Component;
