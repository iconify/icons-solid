import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/g/g-08xsbra.css';
import '../../css/d/d0ywyggxs.css';
import '../../css/u/uc67mufvz.css';
import '../../css/f/fmzltabxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="g-08xsbra"/><path class="d0ywyggxs"/><path class="uc67mufvz"/><path class="fmzltabxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-spreadsheet"} {...others} />);
}

export default Component;
