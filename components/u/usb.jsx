import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzddwfbgx.css';
import '../../css/l/lk0h3ab3p.css';
import '../../css/a/al49_fc3o.css';
import '../../css/x/xxkaztb6n.css';
import '../../css/y/y0gylub8e.css';
import '../../css/z/zuisxgi4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k zzddwfbgx"/><path class="lk0h3ab3p wm-deco"/><path class="al49_fc3o wm-k"/><path class="wm-shadow xxkaztb6n"/><path class="wm-shine y0gylub8e"/><path class="wm-shine zuisxgi4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:usb"} {...others} />);
}

export default Component;
