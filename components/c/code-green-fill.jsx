import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdby753_d.css';
import '../../css/x/xqytf2l6q.css';
import '../../css/l/l3xgrcbun.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVG76xxrbfa" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="tdby753_d"/><stop offset=".5" class="tdby753_d"/><stop offset="1" class="xqytf2l6q"/></linearGradient></defs><path fill="url(#SVG76xxrbfa)" class="l3xgrcbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:code-green-fill"} {...others} />);
}

export default Component;
