import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j8wujfp8r.css';
import '../../css/c/cork_wb0h.css';
import '../../css/m/m0g3d0b1k.css';
import '../../css/o/oahgdj33e.css';
import '../../css/m/mfkakj7xx.css';
import '../../css/z/zuc3v9wbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j8wujfp8r wm-shadow"/><path class="cork_wb0h"/><path class="m0g3d0b1k"/><path class="oahgdj33e"/><path class="mfkakj7xx"/><path class="zuc3v9wbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:candy"} {...others} />);
}

export default Component;
