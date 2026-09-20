import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p-zwxcbbk.css';
import '../../css/t/t8vhikbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p-zwxcbbk"/><path class="t8vhikbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:fingerprint-2"} {...others} />);
}

export default Component;
