import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p-7vbgb0t.css';
import '../../css/n/n7__w6snp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="p-7vbgb0t"/><path class="n7__w6snp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-idea"} {...others} />);
}

export default Component;
