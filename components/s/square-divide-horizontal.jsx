import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zraeqovwy.css';
import '../../css/q/qfd3aux-i.css';
import '../../css/j/j3rfhvdst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 3.06 3.2)" class="zraeqovwy"/><rect transform="matrix(0 1 1 0 3.06 3.2)" class="qfd3aux-i"/><path class="j3rfhvdst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:square-divide-horizontal"} {...others} />);
}

export default Component;
