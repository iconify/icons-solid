import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoshd2brl.css';
import '../../css/e/eww6_fb3u.css';
import '../../css/a/axg085ttp.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGZ7CueRSe" x1="736.964" x2="1738.505" y1="-257.356" y2="-257.356" gradientTransform="matrix(.4945 0 0 -.5112 -356.02 124.44)" gradientUnits="userSpaceOnUse"><stop offset="0" class="eoshd2brl"/><stop offset="1" class="eww6_fb3u"/></linearGradient><path fill="url(#SVGZ7CueRSe)" class="axg085ttp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:budget-board"} {...others} />);
}

export default Component;
