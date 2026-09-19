import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7cm38bro.css';
import '../../css/u/ucvbn7bhd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="j7cm38bro"/><path class="ucvbn7bhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:mic-mute-fill"} {...others} />);
}

export default Component;
