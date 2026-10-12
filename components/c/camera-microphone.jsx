import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thncbjb5a.css';
import '../../css/l/lgi836qzt.css';
import '../../css/i/irsptrbee.css';
import '../../css/x/xjmvuhb0b.css';
import '../../css/v/vrsx8ccsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="thncbjb5a"/><path class="lgi836qzt"/><path class="irsptrbee"/><path class="xjmvuhb0b"/><path class="vrsx8ccsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera-microphone"} {...others} />);
}

export default Component;
