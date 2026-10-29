import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f4mjuejrl.css';
import '../../css/s/sm0-3crom.css';
import '../../css/t/t27yfgt9s.css';
import '../../css/e/e-kbne3pc.css';
import '../../css/s/s3yauib2h.css';
import '../../css/v/vmgu87bkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f4mjuejrl wm-shadow"/><path class="sm0-3crom"/><path class="t27yfgt9s"/><path class="e-kbne3pc"/><path class="s3yauib2h wm-shine"/><path class="vmgu87bkx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:blocks"} {...others} />);
}

export default Component;
