import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv2y62b4z.css';
import '../../css/p/p6wpkwb1d.css';
import '../../css/h/hqzbl-b2s.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jv2y62b4z"/><path class="p6wpkwb1d"/><path class="hqzbl-b2s"/><path class="lpka66bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-warning"} {...others} />);
}

export default Component;
