import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zq-g7c1mn.css';
import '../../css/p/pt6vx7j6q.css';
import '../../css/s/sil16zbqy.css';
import '../../css/j/jg8ldyzlh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zq-g7c1mn"/><path class="pt6vx7j6q"/><rect transform="matrix(0 -1 .99957 -.02944 19.28 20.07)" class="sil16zbqy"/><path class="jg8ldyzlh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:scissors-comb"} {...others} />);
}

export default Component;
