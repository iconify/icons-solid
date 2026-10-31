import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/i/i15re6blx.css';
import '../../css/e/esu2dkbrj.css';
import '../../css/z/zbtggxbnl.css';
import '../../css/g/gk-b6ob3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="i15re6blx"/><path class="esu2dkbrj"/><path class="zbtggxbnl"/><path class="gk-b6ob3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-audio"} {...others} />);
}

export default Component;
