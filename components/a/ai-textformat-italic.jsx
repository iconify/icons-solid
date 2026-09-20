import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/h/h71_nwbpx.css';
import '../../css/h/hhhbhy3mc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="h71_nwbpx"/><path class="hhhbhy3mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-textformat-italic"} {...others} />);
}

export default Component;
