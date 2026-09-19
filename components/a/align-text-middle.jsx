import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x5e7nu4fc.css';
import '../../css/c/cagnyqb0m.css';
import '../../css/s/s8jgbbb7u.css';
import '../../css/a/a3-l9sbot.css';
import '../../css/y/ysa4bbb6q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="x5e7nu4fc"/><path class="cagnyqb0m"/><path class="s8jgbbb7u"/><path class="a3-l9sbot"/><path class="ysa4bbb6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-text-middle"} {...others} />);
}

export default Component;
