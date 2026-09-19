import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1q5ojbym.css';
import '../../css/u/u_m6y0bod.css';
import '../../css/o/og2i17bwk.css';
import '../../css/b/b4fcz99pg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h1q5ojbym"/><path class="u_m6y0bod"/><path class="og2i17bwk"/><path class="b4fcz99pg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shortcake"} {...others} />);
}

export default Component;
