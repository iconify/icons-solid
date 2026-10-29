import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xjngmlclx.css';
import '../../css/j/jil-jubio.css';
import '../../css/h/hsq8okbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xjngmlclx"/><path class="jil-jubio wm-k"/><path class="hsq8okbmq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wreath-sketch"} {...others} />);
}

export default Component;
