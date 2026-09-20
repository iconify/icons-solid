import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l0_krduls.css';
import '../../css/g/gm3gd4twf.css';
import '../../css/o/ota-304ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l0_krduls"/><path class="gm3gd4twf"/><path class="ota-304ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:playlist-songs"} {...others} />);
}

export default Component;
