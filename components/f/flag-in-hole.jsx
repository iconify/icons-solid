import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5hspfbpk.css';
import '../../css/z/zt8lqxb8i.css';
import '../../css/k/ku5dodocn.css';
import '../../css/j/j20qg4ufr.css';
import '../../css/q/q-99fej_f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="i5hspfbpk"/><path class="zt8lqxb8i"/><path class="ku5dodocn"/><path class="j20qg4ufr"/><path class="q-99fej_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:flag-in-hole"} {...others} />);
}

export default Component;
