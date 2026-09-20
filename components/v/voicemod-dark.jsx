import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qaaztzdak.css';

const viewBox = {"width":240,"height":28};
const content = `<defs><filter id="SVG70vUqbqX"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g filter="url(#SVG70vUqbqX)" transform="translate(-134 -25)" class="bi12bsetm"><path class="qaaztzdak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:voicemod-dark"} {...others} />);
}

export default Component;
