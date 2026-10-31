import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/n/n3ef3bkbn.css';
import '../../css/k/kgfrk0cem.css';
import '../../css/w/wa2ce5bbj.css';
import '../../css/i/icylpby2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGH0jSEcQq" cx="7.45" cy="6.18" r="26.54" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="n3ef3bkbn wm-shadow"/><path fill="url(#SVGH0jSEcQq)" class="kgfrk0cem wm-k"/><path class="wa2ce5bbj wm-shine"/><path class="icylpby2r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:worried"} {...others} />);
}

export default Component;
