import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whz6uu_tj.css';
import '../../css/y/ym14rv7er.css';
import '../../css/c/c85p-xbpf.css';
import '../../css/y/yt2hbj67m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="whz6uu_tj"/><path class="ym14rv7er"/><path class="c85p-xbpf"/><path class="yt2hbj67m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-4-bold-duotone"} {...others} />);
}

export default Component;
