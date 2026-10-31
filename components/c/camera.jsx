import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvw1sgbmg.css';
import '../../css/d/dadjyuuuw.css';
import '../../css/i/iub83gpix.css';
import '../../css/c/c8fa596cz.css';
import '../../css/s/skzekmb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cvw1sgbmg wm-shadow"/><path class="dadjyuuuw"/><path class="iub83gpix"/><path class="c8fa596cz"/><path class="skzekmb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:camera"} {...others} />);
}

export default Component;
