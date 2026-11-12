import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/fzo_evvda.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGUl60McUv" x1="102.1" x2="456.6" y1="102.1" y2="456.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGUl60McUv)" class="fzo_evvda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mailstore-light"} {...others} />);
}

export default Component;
