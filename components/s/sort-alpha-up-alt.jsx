import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gkzrwab8u.css';
import '../../css/d/dat65o4mr.css';
import '../../css/q/qi62twexq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="gkzrwab8u"/><path class="dat65o4mr"/><path class="qi62twexq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sort-alpha-up-alt"} {...others} />);
}

export default Component;
