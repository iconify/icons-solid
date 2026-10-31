import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w_2bzzvcm.css';
import '../../css/b/b1ha8fr9z.css';
import '../../css/e/eog3h2gku.css';
import '../../css/e/e3f8hxfjb.css';
import '../../css/r/r1-rentmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w_2bzzvcm wm-shadow"/><path class="b1ha8fr9z"/><path class="eog3h2gku"/><path class="e3f8hxfjb"/><path class="r1-rentmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:paintbrush"} {...others} />);
}

export default Component;
