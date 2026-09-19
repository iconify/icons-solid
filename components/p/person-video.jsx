import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jss3_3pcm.css';
import '../../css/y/y-me7ac8u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jss3_3pcm"/><path class="y-me7ac8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-video"} {...others} />);
}

export default Component;
