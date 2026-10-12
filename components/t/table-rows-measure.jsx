import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjx-zfbwj.css';
import '../../css/e/e3ahb7b0n.css';
import '../../css/x/xuv0msuzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kjx-zfbwj"/><rect transform="matrix(0 -1 -1 0 21.24 14.9)" class="e3ahb7b0n"/><path class="xuv0msuzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-rows-measure"} {...others} />);
}

export default Component;
