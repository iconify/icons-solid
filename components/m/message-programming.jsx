import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k-eyngw_k.css';
import '../../css/a/aj0cejbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="k-eyngw_k"/><path class="aj0cejbxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-programming"} {...others} />);
}

export default Component;
