import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6qntjvwm.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/wigdudbli.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGeeFnJbwH" x1="256" x2="256" y2="364.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="a6qntjvwm"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGeeFnJbwH)" class="wigdudbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:string-is-light"} {...others} />);
}

export default Component;
