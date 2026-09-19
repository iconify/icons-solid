import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8sbyybhx.css';
import '../../css/d/di5o6abzw.css';
import '../../css/t/tfb53697o.css';
import '../../css/y/ysanb1o8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8sbyybhx"/><path class="di5o6abzw"/><path class="tfb53697o"/><path class="ysanb1o8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:qrcode"} {...others} />);
}

export default Component;
