import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ekfw6raai.css';
import '../../css/z/zuar5lbsy.css';
import '../../css/b/bhhd6db8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ekfw6raai wm-a"/><path class="wm-k zuar5lbsy"/><path class="bhhd6db8f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-decreasing-sketch"} {...others} />);
}

export default Component;
