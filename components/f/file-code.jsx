import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/e/evj4arbgm.css';
import '../../css/t/tbgmglsbj.css';
import '../../css/s/sy1q37l5w.css';
import '../../css/c/cn5-cebmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="evj4arbgm"/><path class="tbgmglsbj"/><path class="sy1q37l5w"/><path class="cn5-cebmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-code"} {...others} />);
}

export default Component;
