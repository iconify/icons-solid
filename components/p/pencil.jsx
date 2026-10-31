import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s755496ey.css';
import '../../css/y/yf22sk9po.css';
import '../../css/f/f_kh3v_7r.css';
import '../../css/k/knwd84p9u.css';
import '../../css/m/mkxt1ktfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s755496ey"/><path class="wm-shine yf22sk9po"/><path class="f_kh3v_7r wm-k"/><path class="knwd84p9u wm-a"/><path class="mkxt1ktfx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pencil"} {...others} />);
}

export default Component;
