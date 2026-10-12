import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6jlygupp.css';
import '../../css/y/y28_79bmh.css';
import '../../css/x/x3g3dcufv.css';
import '../../css/s/sldqc1bvx.css';
import '../../css/j/jz1rzgnor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p6jlygupp"/><path class="y28_79bmh"/><path class="x3g3dcufv"/><path class="sldqc1bvx"/><path class="jz1rzgnor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:baby"} {...others} />);
}

export default Component;
