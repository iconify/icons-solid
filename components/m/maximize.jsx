import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gkee2nysx.css';
import '../../css/y/y7ev9xbdz.css';
import '../../css/r/rrtkz0b0z.css';
import '../../css/y/yu55nbdpt.css';
import '../../css/k/kp3veacqr.css';
import '../../css/t/tcex32hyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gkee2nysx wm-shadow"/><path class="y7ev9xbdz"/><path class="rrtkz0b0z"/><path class="yu55nbdpt"/><path class="kp3veacqr wm-shine"/><path class="tcex32hyq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:maximize"} {...others} />);
}

export default Component;
