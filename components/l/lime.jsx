import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rk2fecb1r.css';
import '../../css/v/vt8eloboj.css';
import '../../css/n/nsy6y-lmr.css';
import '../../css/l/lhfjjhbjh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rk2fecb1r"/><path class="vt8eloboj"/><path class="nsy6y-lmr"/><path class="lhfjjhbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lime"} {...others} />);
}

export default Component;
