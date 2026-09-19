import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv5nmx8kf.css';
import '../../css/l/l7urkebnk.css';
import '../../css/v/v15y2dbrd.css';
import '../../css/j/jsv5pubzd.css';
import '../../css/r/r664qbl0b.css';
import '../../css/i/ir73eibak.css';
import '../../css/q/qtsdl92_f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mv5nmx8kf"/><path class="l7urkebnk"/><path class="v15y2dbrd"/><path class="jsv5pubzd"/><path class="r664qbl0b"/><path class="ir73eibak"/><path class="qtsdl92_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:high-speed-train"} {...others} />);
}

export default Component;
