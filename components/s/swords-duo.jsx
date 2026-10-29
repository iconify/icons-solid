import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tt58_4b2g.css';
import '../../css/z/z_6z4pzfa.css';
import '../../css/x/x4c9pebfp.css';
import '../../css/b/b28o4vhcj.css';
import '../../css/i/iy5v8lbll.css';
import '../../css/t/tmj-ls_rw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tt58_4b2g"/><path class="wm-a z_6z4pzfa"/><path class="x4c9pebfp"/><path class="b28o4vhcj wm-a"/><path class="iy5v8lbll"/><path class="tmj-ls_rw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:swords-duo"} {...others} />);
}

export default Component;
