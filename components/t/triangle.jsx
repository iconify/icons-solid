import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4x_58bas.css';
import '../../css/h/hkiav7m0v.css';
import '../../css/i/i4zx9l7tm.css';
import '../../css/w/wjl8m50wr.css';
import '../../css/n/nnl-1qb-c.css';
import '../../css/d/diarpa7or.css';
import '../../css/q/qxkkiaczr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4x_58bas wm-shadow"/><path class="hkiav7m0v wm-k"/><path class="i4zx9l7tm wm-k"/><path class="wjl8m50wr wm-k"/><path class="nnl-1qb-c wm-k"/><path class="diarpa7or wm-k"/><path class="qxkkiaczr wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:triangle"} {...others} />);
}

export default Component;
