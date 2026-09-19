import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_omhjbau.css';
import '../../css/k/k1m51n3mc.css';
import '../../css/e/eqdu0i6_m.css';
import '../../css/j/j4-1v7byq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="s_omhjbau"/><path class="k1m51n3mc"/><path class="eqdu0i6_m"/><path class="j4-1v7byq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pig"} {...others} />);
}

export default Component;
