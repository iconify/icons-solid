import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fffy1xlok.css';
import '../../css/h/h13cb1w3n.css';
import '../../css/i/iycln-b8i.css';
import '../../css/h/hbt4h80zk.css';
import '../../css/j/ju5f3lb5l.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGKJlEQK7q" x1="365.7" x2="146.3" y1="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="fffy1xlok"/><stop offset="1" class="h13cb1w3n"/></linearGradient><circle fill="url(#SVGKJlEQK7q)" class="iycln-b8i"/><path class="hbt4h80zk"/><path class="ju5f3lb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:remmina"} {...others} />);
}

export default Component;
