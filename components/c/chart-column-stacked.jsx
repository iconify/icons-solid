import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f5ezvhpol.css';
import '../../css/q/qij50sb9d.css';
import '../../css/s/sbc5a8b2s.css';
import '../../css/j/j5erqwb9a.css';
import '../../css/x/xla8u0ljy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f5ezvhpol wm-shadow"/><path class="qij50sb9d"/><path class="sbc5a8b2s"/><path class="j5erqwb9a"/><path class="xla8u0ljy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-column-stacked"} {...others} />);
}

export default Component;
