import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq_5q0glz.css';
import '../../css/g/gf8i8vw_f.css';
import '../../css/g/gf-_xybdl.css';
import '../../css/e/elg23jy0c.css';
import '../../css/o/oo3b5t13u.css';
import '../../css/j/jvetpi09u.css';
import '../../css/z/z0b9ftbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qq_5q0glz wm-shadow"/><path class="gf8i8vw_f wm-k"/><path class="gf-_xybdl wm-k"/><path class="elg23jy0c wm-k"/><path class="oo3b5t13u wm-k"/><path class="jvetpi09u wm-k"/><path class="wm-shine z0b9ftbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bluetooth"} {...others} />);
}

export default Component;
