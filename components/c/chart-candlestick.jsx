import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p2bs5ab3t.css';
import '../../css/m/msvi2ibgs.css';
import '../../css/s/soktzeb2c.css';
import '../../css/e/ez6xvo6mf.css';
import '../../css/s/saj09ob3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p2bs5ab3t wm-shadow"/><path class="msvi2ibgs"/><path class="soktzeb2c"/><path class="ez6xvo6mf"/><path class="saj09ob3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-candlestick"} {...others} />);
}

export default Component;
