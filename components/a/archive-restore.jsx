import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-guy0ggi.css';
import '../../css/e/ec6upgpsu.css';
import '../../css/o/o-52tjh0o.css';
import '../../css/q/qekba0h4s.css';
import '../../css/y/yr2h5ubuu.css';
import '../../css/o/o35w_0bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-guy0ggi wm-k"/><path class="ec6upgpsu wm-k"/><path class="o-52tjh0o wm-k"/><path class="qekba0h4s wm-shadow"/><path class="wm-shine yr2h5ubuu"/><path class="o35w_0bfj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:archive-restore"} {...others} />);
}

export default Component;
