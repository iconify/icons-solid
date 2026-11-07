import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8qjfwb5z.css';
import '../../css/m/mjmo6o7rp.css';
import '../../css/t/tctv76bhi.css';
import '../../css/k/ksdryubwm.css';
import '../../css/s/s_dwlvbyp.css';
import '../../css/o/odwcfcbti.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGY1gIvxZa" x2="1" y1="1"><stop offset="0" class="p8qjfwb5z"/><stop offset="1" class="mjmo6o7rp"/></linearGradient><linearGradient id="SVG1EmZ6bfy" x2="1" y1="1"><stop offset="0" class="tctv76bhi"/><stop offset="1" class="ksdryubwm"/></linearGradient></defs><path fill="url(#SVGY1gIvxZa)" class="s_dwlvbyp"/><path fill="url(#SVG1EmZ6bfy)" class="odwcfcbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:velite"} {...others} />);
}

export default Component;
