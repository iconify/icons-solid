import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n8pwo4b7y.css';
import '../../css/f/fwg5y_bqh.css';
import '../../css/c/cle6aed_m.css';
import '../../css/s/scq4ssbie.css';
import '../../css/e/ep5gs9bjp.css';
import '../../css/l/llbfmlb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n8pwo4b7y wm-shadow"/><path class="fwg5y_bqh"/><path class="cle6aed_m"/><path class="scq4ssbie"/><path class="ep5gs9bjp"/><path class="llbfmlb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-merge"} {...others} />);
}

export default Component;
