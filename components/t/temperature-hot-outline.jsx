import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kf_jk0b5q.css';
import '../../css/q/q44msqbev.css';
import '../../css/c/co51_lt9h.css';
import '../../css/r/rvb9hdc8g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kf_jk0b5q"/><path clip-rule="evenodd" class="q44msqbev"/><path class="co51_lt9h"/><path clip-rule="evenodd" class="rvb9hdc8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:temperature-hot-outline"} {...others} />);
}

export default Component;
