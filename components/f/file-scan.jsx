import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xqs8i6-cp.css';
import '../../css/i/i_q8n1bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xqs8i6-cp"/><path class="i_q8n1bbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-scan"} {...others} />);
}

export default Component;
