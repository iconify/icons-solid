import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/t/tzxipk_6c.css';
import '../../css/d/dyexuk5no.css';
import '../../css/t/tej44k3ii.css';
import '../../css/o/o7kyknbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="tzxipk_6c"/><path class="dyexuk5no"/><path class="tej44k3ii"/><path class="o7kyknbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-minus"} {...others} />);
}

export default Component;
