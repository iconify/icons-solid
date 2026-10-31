import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9-pi1foi.css';
import '../../css/z/zxaanroxk.css';
import '../../css/j/j1-mmebyw.css';
import '../../css/k/kv-gf4k6t.css';
import '../../css/n/n-e1f-jmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d9-pi1foi wm-shadow"/><path class="zxaanroxk"/><path class="j1-mmebyw"/><path class="kv-gf4k6t"/><path class="n-e1f-jmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cup-soda"} {...others} />);
}

export default Component;
