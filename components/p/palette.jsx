import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p3xpfwbqf.css';
import '../../css/k/kxczbok0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path clip-rule="evenodd" class="p3xpfwbqf"/><path class="kxczbok0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:palette"} {...others} />);
}

export default Component;
