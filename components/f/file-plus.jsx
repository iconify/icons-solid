import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/b/bn5kjs2gv.css';
import '../../css/z/zn1c7xb9d.css';
import '../../css/l/l-5ly26tl.css';
import '../../css/q/qz-b4ng_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="bn5kjs2gv"/><path class="zn1c7xb9d"/><path class="l-5ly26tl"/><path class="qz-b4ng_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-plus"} {...others} />);
}

export default Component;
