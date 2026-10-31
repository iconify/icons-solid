import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x6falv9am.css';
import '../../css/h/hjr5enbkw.css';
import '../../css/n/nly9vkofp.css';
import '../../css/w/wkbf8vbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x6falv9am"/><path class="hjr5enbkw wm-shadow"/><path class="nly9vkofp"/><path class="wkbf8vbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-lightning"} {...others} />);
}

export default Component;
