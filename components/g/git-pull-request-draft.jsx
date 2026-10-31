import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a6xtgbbpy.css';
import '../../css/h/h6pp3dbux.css';
import '../../css/x/xgi6hfb6n.css';
import '../../css/j/js9045b9u.css';
import '../../css/j/j1f-dlb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a6xtgbbpy wm-shadow"/><path class="h6pp3dbux"/><path class="xgi6hfb6n"/><path class="js9045b9u"/><path class="j1f-dlb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-pull-request-draft"} {...others} />);
}

export default Component;
