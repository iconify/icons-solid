import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/r/r74-q9tpf.css';
import '../../css/x/xyfv7bced.css';
import '../../css/e/e1njw3nwf.css';
import '../../css/g/gaynqtcvf.css';
import '../../css/i/imcr3si2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="r74-q9tpf"/><path class="xyfv7bced"/><path class="e1njw3nwf"/><path class="gaynqtcvf"/><path class="imcr3si2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:columns-3"} {...others} />);
}

export default Component;
