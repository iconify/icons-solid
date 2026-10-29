import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qsshopbyl.css';
import '../../css/e/evua23beh.css';
import '../../css/m/m1oeogbwv.css';
import '../../css/d/drmyw7bbm.css';
import '../../css/y/yqvnlvbln.css';
import '../../css/m/mukehqbda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qsshopbyl wm-shadow"/><path class="evua23beh"/><path class="m1oeogbwv"/><path class="drmyw7bbm"/><path class="wm-shine yqvnlvbln"/><path class="mukehqbda wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:text-cursor"} {...others} />);
}

export default Component;
