import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b8zzi9b9i.css';
import '../../css/r/rwlw5rbrz.css';
import '../../css/l/l5ajeghbw.css';
import '../../css/n/nb1n9zbjd.css';
import '../../css/z/ziju64h3m.css';
import '../../css/x/x18h2pbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b8zzi9b9i wm-shadow"/><path class="rwlw5rbrz"/><path class="l5ajeghbw"/><path class="nb1n9zbjd"/><path class="ziju64h3m"/><path class="x18h2pbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:water-balloon"} {...others} />);
}

export default Component;
