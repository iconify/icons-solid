import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyj6f_96p.css';
import '../../css/z/zm31xdjdj.css';
import '../../css/b/bam9j08kr.css';
import '../../css/z/zhb5zk9go.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fyj6f_96p"/><path clip-rule="evenodd" class="zm31xdjdj"/><path class="bam9j08kr"/><path class="zhb5zk9go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lasso-cursor"} {...others} />);
}

export default Component;
