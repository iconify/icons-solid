import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zg-qcwipg.css';
import '../../css/i/i9fwbbbss.css';
import '../../css/q/qx0vdibrb.css';
import '../../css/u/ut9obfbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zg-qcwipg"/><path class="i9fwbbbss"/><path class="qx0vdibrb"/><path class="ut9obfbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-image-bold"} {...others} />);
}

export default Component;
