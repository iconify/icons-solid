import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/w/wng9gxbpa.css';
import '../../css/w/wscsu_mrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="g2bmsqbnm"/><path class="wng9gxbpa"/><path class="wscsu_mrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dot-circle-dashed"} {...others} />);
}

export default Component;
