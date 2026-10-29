import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/siiq3ubdv.css';
import '../../css/m/myyvdnbaf.css';
import '../../css/z/zsubpclpp.css';
import '../../css/a/ag46ix2kh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="siiq3ubdv"/><path class="myyvdnbaf wm-a"/><path class="wm-k zsubpclpp"/><path class="ag46ix2kh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-code-sketch"} {...others} />);
}

export default Component;
