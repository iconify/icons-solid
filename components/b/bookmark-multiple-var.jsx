import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vty1z-btt.css';
import '../../css/l/louektrjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="vty1z-btt"/><path class="louektrjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bookmark-multiple-var"} {...others} />);
}

export default Component;
