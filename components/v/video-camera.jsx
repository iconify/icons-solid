import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n3yhrkbkk.css';
import '../../css/r/r7hkatu5a.css';
import '../../css/v/v0klmbc7w.css';
import '../../css/x/xcfu_1bpw.css';
import '../../css/e/e5leyacwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n3yhrkbkk wm-shadow"/><path class="r7hkatu5a"/><path class="v0klmbc7w"/><path class="xcfu_1bpw"/><path class="e5leyacwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:video-camera"} {...others} />);
}

export default Component;
