import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txlw8ibpk.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/p/pwdedgbij.css';
import '../../css/f/fg9_jcc1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="txlw8ibpk"/><path class="y8ppixbeg"/><path class="pwdedgbij"/><path class="fg9_jcc1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shredder-duotone"} {...others} />);
}

export default Component;
