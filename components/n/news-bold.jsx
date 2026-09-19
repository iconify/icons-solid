import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0phu2bbs.css';
import '../../css/a/a5oyvs24b.css';
import '../../css/f/fj5jfhb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s0phu2bbs"><path class="a5oyvs24b"/><path class="fj5jfhb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:news-bold"} {...others} />);
}

export default Component;
