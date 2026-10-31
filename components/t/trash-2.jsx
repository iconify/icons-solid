import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iow_m3mrz.css';
import '../../css/i/ih-kp9bdk.css';
import '../../css/s/s99aj8bak.css';
import '../../css/f/fv4ql4bmt.css';
import '../../css/o/on8pqcb3g.css';
import '../../css/r/r-ce8nbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="iow_m3mrz wm-shadow"/><path class="ih-kp9bdk"/><path class="s99aj8bak"/><path class="fv4ql4bmt"/><path class="on8pqcb3g"/><path class="r-ce8nbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:trash-2"} {...others} />);
}

export default Component;
