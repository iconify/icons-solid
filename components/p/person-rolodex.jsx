import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jss3_3pcm.css';
import '../../css/y/ywz4lmofp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jss3_3pcm"/><path class="ywz4lmofp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-rolodex"} {...others} />);
}

export default Component;
